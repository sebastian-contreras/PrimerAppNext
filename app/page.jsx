import React from "react";

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const users = await fetchUser();

  return (
    <>
      <h1>Usuarios</h1>
      <p>{JSON.stringify(users)}</p>
    </>
  );
}

export default IndexPage;
