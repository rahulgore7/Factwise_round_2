const UserList = ({ data }) => {
  return (
    <div>
      <h2>UserList</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
