import React from "react";

const ItemEdit = (props) => {
  const { department, item } = props;
  return (
    <div>
      <h1>Edit Item</h1>
      <form action={`/departments/${department.id}/items/${item.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={item.name} name="item[name]" />
        <p>Available</p>
        <input defaultValue={item.available} name="item[available]" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ItemEdit;