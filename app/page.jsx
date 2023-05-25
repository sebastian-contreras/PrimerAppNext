import Users from "@/components/Users";
import React from "react";

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const users = await fetchUser();

  return (
    <div>
      <h1>Inicio</h1>
      <Users users={users}/>
    </div>
  );
}

export default IndexPage;
