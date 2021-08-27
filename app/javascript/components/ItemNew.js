import React from "react";

const ItemNew = (props) => {
  const { department } = props;
  return (
    <div>
      <h1>New Item</h1>
      <form action={`/departments/${department.id}/items`} method="post">
        <p>Name</p>
        <input name="item[name]" />
        <p>Available</p>
        <input name="item[available]" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ItemNew;