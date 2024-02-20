import React from "react";
import UserList from "./UserList";
import withLoadingSpinner from "./withLoadingSpinner";
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
const UserListWithSpinner = withLoadingSpinner(UserList, fetchUsers);

export default UserListWithSpinner;
