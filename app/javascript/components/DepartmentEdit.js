import React from "react"

const DepartmentEdit = (props) => {
  return (
    <div className="container">
      <h1>Edit Department</h1>
      <a href="/departments">Go Back</a>
      <form action={`/departments/${props.department.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name:</p>
        <input defaultValue={props.department.name} name="department[name]"/>
        <p>Manager:</p>
        <input defaultValue={props.department.manager} name="department[manager]" />
        <p># Employees:</p>
        <input defaultValue={props.department.n_employees} name="department[n_employees]" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default DepartmentEdit;

// import React from "react";

// const EditPage = (props) => {
//   // this is not html this is JSX
//   // which embedded html in js'
//   return (
//     <div className="container">
//       <h1>Form</h1>
//       <a href="/">back</a>
//       <form action={`/pages/${props.page.id}`} method="post">
//         <input type="hidden" name="_method" value="patch" />
//         <p>title</p>
//         <input defaultValue={props.page.title} name="page[title]" />
//         <p>author</p>
//         <input defaultValue={props.page.author} name="page[author]" />
//         <p>body</p>
//         <textarea defaultValue={props.page.body} name="page[body]" />
//         <button type="submit">update</button>
//       </form>
//     </div>
//   );
// };

// export default EditPage;