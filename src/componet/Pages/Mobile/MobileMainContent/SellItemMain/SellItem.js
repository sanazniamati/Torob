import React from"react";
import "./SellItem.css";
export default function SellItem(props)
 {

  return (   
    <div className="item_container">
        <div className="image_box_mobile">
            <img src={props.kala.imageAddress}/>
        </div>
        <div className="title">{props.kala.name}</div>
        <div className="price">{`از ${props.kala.price} تومان`}</div>
        <div className="market_count">{`در ${props.kala.marketCount} فروشگاه`}</div>
        <div className="reaction_box"></div>
    </div>  
  );
}
