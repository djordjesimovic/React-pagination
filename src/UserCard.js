import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='user-card'>
        <h2>{user.name.first}{user.name.last}</h2>
        <img src={user.picture.large} alt="User" />
    </div>
  )
}

export default UserCard