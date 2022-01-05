import { Component } from "react";
import ItemsArray from "../../mock-data/ItemsArray";
import Item from "../Item";
import SearchByWords from "../SearchByWords";
import SearchBySelect from "../SearchBySelect";
import WatchList from "../WatchList";
import "./RenderItem.css";
import getItems from "../../getItems";


class RenderItems extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      arrayToShow: ItemsArray,
      arrayForWatch: [],
      selectedChoice: "",
    };
  }

  componentDidMount() {
    getItems().then((items) => {
      this.setState({ arrayToShow: items });
    });
  }

  addToWatchlist(item) {
    const found = this.state.arrayForWatch.filter((obj) => obj.id === item.id);
    if (this.state.arrayForWatch.length === 0 || found.length === 0) {
      let joined = this.state.arrayForWatch.concat(item);
      this.setState({ arrayForWatch: joined });
      item.watch="./watchMarked.png"
    }
  }

  inputValueChange(e) {
    const { value } = e.target;
    this.state.inputValue = value;
    this.setState({ inputValue: value });
    this.ShowFilteredArray()
  }

  dropdownChangeEvent(e) {
    const { value } = e.target;
    this.state.selectedChoice = value;
    this.setState({ selectedChoice: value });
    this.ShowFilteredArray()
  }


  ShowFilteredArray(){

    const input = this.state.inputValue;
    const select = this.state.selectedChoice;

    if (input === "") {
      this.setState({ arrayToShow: ItemsArray });
    }
    else if (select ===""){
        const itemsArrayFiltrered = ItemsArray.filter((item) => {
        const { name, description, price, shipping } = item;
        return [name, description, price, shipping].some((field) => {
          return field.toLowerCase().includes(input.toLowerCase());
        });
      });
      this.setState({
        arrayToShow: itemsArrayFiltrered,
      });
    }
    else {
      const itemsArrayFiltrered = ItemsArray.filter((item) => {
        return item[select]
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase());
     });
    this.setState({
      arrayToShow: itemsArrayFiltrered,
    });
    }
  }


  render() {
    return (
      <div>
        <img src="./strip.png" alt="" className="stripImg"></img>
        <div className="mainRender">
          {this.state.arrayToShow.map((item) => (
            <Item
              key={`item_${item.id}`}
              item={item}
              onClick={this.addToWatchlist.bind(this)}
            />
          ))}
          ;
        </div>
        <div className="SearchByWordsDiv">
          <SearchByWords
            id="searchText"
            placeholder="Search..."
            value={this.state.inputValue}
            onChange={this.inputValueChange.bind(this)}
          />
          <div className="watchListDiv">
            <WatchList arrayForWatch={this.state.arrayForWatch} />
          </div>
          <div className="SearchBySelectDiv">
            <SearchBySelect
              id="searchSelect"
              value={this.state.selectedChoice}
              onChange={this.dropdownChangeEvent.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RenderItems;



