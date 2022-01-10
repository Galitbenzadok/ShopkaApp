import "./Menu.css";
import img from "../../../assets/depart.PNG";
import indentIcon from "../../../assets/Vector.png"

function Menu() {
    return (
      <div className="Menu">
        <img src={img} alt="" />
        <h2> All Categories </h2>

        <h3>
          <img src={indentIcon} alt="" className="indentIcon" />
          Cell Phones and Smartphones
        </h3>
        <a href="#">Cell Phone Accessories</a>
        <a href="#">Cell Phone Gatgets</a>
        <a href="#">Applications</a>
        <a href="#">Smart Watches</a>
        <a href="#">Show more</a>
        <h3>
          <img src={indentIcon} alt="" className="indentIcon" />
          Business and Industrial
        </h3>
        <a href="#">Cell Phone Accessories</a>
        <a href="#">Cell Phone Gatgets</a>
        <a href="#">Applications</a>
        <a href="#">Smart Watches</a>
        <a href="#">Show more</a>
      </div>
    );
}

export default Menu;
