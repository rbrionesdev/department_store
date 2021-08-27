// import React from 'react'

import React from "react";

export default (props) => {
  const { items, department } = props;
  return (
    <>
      <h1>Items | {department.name} Department</h1>
      <a href={`/departments/${department.id}`}>Go Back to Department</a>
      <a href={`/`}>Go Back to Departments</a>
      <a href={`/departments/${department.id}/items/new`}>Item New</a>
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <a href={`/departments/${department.id}/items/${item.id}`}>
            Details
          </a>
          <a href={`/departments/${department.id}/items/${item.id}/edit`}>
            Edit Item
          </a>
          <a href={`/departments/${department.id}/items/${item.id}`} data-method="delete">
            Delete Item
          </a>
        </div>
      ))}
    </>
  );
};