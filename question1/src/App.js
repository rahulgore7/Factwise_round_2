import UserList from "./components/UserList";

// use this users object to render the list of users
const users = [
  {
    firstName: "Ada",
    lastName: "lovelace",
  },
  { firstName: "Donld", lastName: "knuth" },
];

function App() {
  return (
    <div>
      {/* render the count of users here */}

      {/* render the user list compoenent here */}
      <UserList users={users}/>
    </div>
  );
}

export default App;
