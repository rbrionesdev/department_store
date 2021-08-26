import React from "react";

const Department = (props) => {
  return (
    <div>
      <p>Department</p>
      <p>{`${JSON.stringify(props.department)}`}</p>
      
    </div>
  );
};

export default Department;