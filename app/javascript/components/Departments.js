// import React from "react";

// const Departments = (props) => {
//   return (
//     <div>
//       <h1>Departments List</h1>
//       {props.departments.map((department) => {
//         return (
//           <div style={{ border: "1px solid", margin: "20px" }} key={department.id}>
//             <p>ID: {department.id}</p>
//             <p>Name: {department.name}</p>
//             <p>Manager: {department.manager}</p>
//             <p># Employees: {department.n_employees}</p>
            
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Departments;

import React from "react";
export default (props) => {
  const { departments } = props;
  return (
    <>
      <h1>Departments Here</h1>
      
      {/* <a href={`/departments/new`}>Add New Department</a> */}
      {departments.map((department) => (
        <div>
          <h3>{department.name}</h3>
          {/* Links to departments#show and items#show*/ }
          <a href={`/departments/${department.id}`}>
            show (goes to departments#show)
          </a>
          {/* <a href={`/departments/${department.id}/items`}>
            show (goes to items#show)
          </a> */}
          {/* <a href={`/departments/${department.id}/edit`}>
            edit
          </a>
          <a href={`/departments/${department.id}`} data-method="delete">
            delete
          </a> */}
        </div>
      ))}
    </>
  );
};