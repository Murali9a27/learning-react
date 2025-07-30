import React from 'react'
import UserCard from './UserCard'
import users from '../data/usersData'

function Content(props) {
  return (
    <main style={props.style}>
      
        <p>This is the content area where main info goes.</p>
        {
          users.map((user)=>(
            <UserCard key={user.id} name={user.name} rating={4.2} reviewData={2} tag={[user.role]} achievementStat={100} certificateStat={5} />
          ))
        }
        {/* <UserCard name="Murali" rating={4.2} reviewData={2} tag={["Html", "Css", "JS"]} achievementStat={100} certificateStat={5} /> */}
        {/* <UserCard name="Mohit" rating={4.2} reviewData={2} tag={["Figma", "Ps", "Illustrator"]} achievementStat={100} certificateStat={5} /> */}
    </main>
  )
}

export default Content