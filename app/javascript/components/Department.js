import React from "react";

const Department = (props) => {
  return (
    <div>
      <h1>Department</h1>
      <div>
        <p>ID: {props.department.id}</p>
        <p>Name: {props.department.name}</p>
        <p>Manager: {props.department.manager}</p>
        <p># Employees: {props.department.n_employees}</p>
      </div>
      {/* <p>{`${JSON.stringify(props.department)}`}</p> */}
      <div>
      <a href={`/departments`}>
        Go Back
      </a>
      </div>
    </div>
  );
};

export default Department;