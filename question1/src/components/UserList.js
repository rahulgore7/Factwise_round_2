const UserList = ({ users }) => {
  const sortedUser = users ? users.sort((a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())) : [];

  // render your user list here
  return (
    <div>
      <div className="user-count">
        Users:{sortedUser.length}
      </div>
      {sortedUser.length > 0 && (<ul>{
        sortedUser.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName}
          </li>
        ))}</ul>)}
    </div>
  )
}

export default UserList