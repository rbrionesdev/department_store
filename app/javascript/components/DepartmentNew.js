import React from "react"

const DepartmentNew = () => {
  return (
    <div className="container">
      <h1>New Department</h1>
      <form action={`/departments`} method="post">
        <p>Name:</p>
        <input name="department[name]"/>
        <p>Manager:</p>
        <input name="department[manager]" />
        <p># Employees:</p>
        <input name="department[n_employees]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default DepartmentNew;

// import React from "react";
// export default (props) =>  {

//     // doing this here in case creating failed we can still get back
//     // the values that where in the form so it doesn't clear out the form
//     const { name } = props.sub;
//     const defaultName = name ? name : "";
//     return (
//       <>
//         <h1>SubNew Component Here</h1>
//         <form action="/subs" method="post">
//           <input
//             placeholder="Name"
//             type="text"
//             defaultValue={defaultName}
//             name="sub[name]"
//           />
//           <button type="submit">add</button>
//         </form>
//       </>
//     );
  
// }