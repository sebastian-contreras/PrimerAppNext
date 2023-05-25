import React from 'react'
async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UserDetails({params}) {
    const user = await getUser(params.id)
  return (
    <div>
        <img src={user.avatar} alt={user.email} />
        <div>
            <h3>{user.id} {user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserDetails