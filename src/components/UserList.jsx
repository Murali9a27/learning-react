import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    // API for dummy users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // set fetched users
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
    // const [users, setUsers] = useState([
    //     { id: 1, name: "Murali", role: "Frontend Developer" },
    //     { id: 2, name: "Neha", role: "UI/UX Designer" },
    //     { id: 3, name: "Rahul", role: "React Developer" }
    // ]);
    // const [show, setShow] = useState(true);
    // const removeUser = (id)=>{
    //     setUsers((prevUsers)=> prevUsers.filter(user => user.id !== id))
    // }
  return (
    <>
        {/* <button onClick={()=>setShow(!show)}>{!show?'Show':'Hide'}</button>

        {show && 
        <ul>
            {users.map((user) => (
                <li key={user.id}>Name: {user.name}, Role: {user.role} <button onClick={() => removeUser(user.id)}>Remove</button></li>
            ))}
        </ul>} */}

         <main>
      <p>Users from API:</p>
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            rating={4.2}
            reviewData={2}
            tag={[user.company.bs]} // using company buzzword as tag
            achievementStat={100}
            certificateStat={5}
            img={`https://i.pravatar.cc/150?img=${user.id}`} // fake avatar
          />
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </main>
        
    </>
  )
}

export default UserList