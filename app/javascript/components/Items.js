// import React from 'react'

// export default (props) =>  {

//     const { topics, sub } = props;
//     return (
//       <>
//         <h1>Topics Page from {sub.name} sub</h1>
//         <a href={`/subs/${sub.id}`}>back to sub show</a>
//         <a href={`/`}>back to subs</a>
//         <a href={`/subs/${sub.id}/topics/new`}>topic new</a>
//         {topics.map((topic) => (
//           <div key={topic.id} className="topic-card">
//             <h3>{topic.name}</h3>
//             <p>{topic.body}</p>
//             <a href={`/subs/${sub.id}/topics/${topic.id}`}>topic show</a>
            
//           </div>
//         ))}
//       </>
//     );

// }

  
import React from "react";

export default (props) => {
  const { items, department } = props;
  return (
    <>
      <h1>Items Page from {department.name} Department</h1>
      <a href={`/departments/${department.id}`}>back to Department show</a>
      <a href={`/`}>back to Departments</a>
      <a href={`/departments/${sub.id}/items/new`}>item new</a>
      {items.map((item) => (
        <div key={item.id} className="topic-card">
          <h3>{item.name}</h3>
          <p>{item.available}</p>
          <a href={`/subs/${sub.id}/topics/${topic.id}`}>
            show item (item show method)
          </a>
          
          <a href={`/departments/${department.id}/items/${item.id}/edit`}>edit item</a>
          <a href={`/departments/${department.id}/items/${item.id}`} data-method="delete">
            delete topic
          </a>
        </div>
      ))}
    </>
  );
};