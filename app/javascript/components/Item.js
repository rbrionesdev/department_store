import React from "react";

const Item = (props) => {
  const { item, department } = props;
  return (
    <div>
      <h1>Item</h1>
      <div>
        <p>Name: {props.item.name}</p>
        <p>Available: {props.item.available}</p>
      </div>
      <a href={`/departments/${department.id}/items`}>Go Back</a>
    </div>
  );
};

export default Item;