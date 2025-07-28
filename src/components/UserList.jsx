import React, { useState } from 'react'

function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: "Murali", role: "Frontend Developer" },
        { id: 2, name: "Neha", role: "UI/UX Designer" },
        { id: 3, name: "Rahul", role: "React Developer" }
    ]);
    const [show, setShow] = useState(true);
    const removeUser = (id)=>{
        setUsers((prevUsers)=> prevUsers.filter(user => user.id !== id))
    }
  return (
    <>
        <button onClick={()=>setShow(!show)}>{!show?'Show':'Hide'}</button>

        {show && 
        <ul>
            {users.map((user) => (
                <li key={user.id}>Name: {user.name}, Role: {user.role} <button onClick={() => removeUser(user.id)}>Remove</button></li>
            ))}
        </ul>}
        
    </>
  )
}

export default UserList