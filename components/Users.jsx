"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Users({ users }) {
  const router = useRouter();
    // <ul>
    //     <li
    //       key={user.id}
    //       onClick={() => {
    //         router.push(`/users/${user.id}`);
    //       }}
    //     >
    //       <h5>
    //         {user.id} {user.first_name} {user.last_name}
    //       </h5>
    //       <p>{user.email}</p>
    //       <img src={user.avatar} alt={user.email} />
    //     </li>
    // </ul>
  return (
    <>  
      {users.map((user) => (
    <div onClick={()=>{router.push(`/users/${user.id}`);}} className="card mb-3" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={user.avatar} className="img-fluid rounded-start" alt={user.email} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user.id} {user.first_name} {user.last_name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    ))}
    </>
  );
}

export default Users;
