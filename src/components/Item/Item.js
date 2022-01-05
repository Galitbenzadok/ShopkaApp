import React from "react";

const Item = (props) => {
  const { item, onClick } = props;
  const { id, name, img, description, price, shipping, rate, watch } = item;
  return (
    <div className="divCard">
      <div className="itemId">{id}</div>
      <div className="itemName">{name}</div>
      <div className="itemImg">
        <img alt="item" src={img}></img>
      </div>
      <div className="itemDescription">{description}</div>
      <div className="itemPrice">{price}</div>
      <div className="itemShipping">{shipping}</div>
      <div className="itemRate">
        <img alt="rate" src={rate}></img>
      </div>
      <div className="itemWatch">
        <button className="watchBut" onClick={() => onClick(item)}>
          <img alt="watch" src={watch}></img>
        </button>
      </div>
    </div>
  );
};

export default Item;
