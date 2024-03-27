import React, { useState } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Define editingUser state

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null); // Reset editingUser state after editing
  };

  // Pass setEditingUser function down to UserList
  return (
    <div className="App">
      <h1>User Manager</h1>
      <UserList users={users} onDelete={deleteUser} onEdit={editUser} setEditingUser={setEditingUser} />
      <UserForm onSubmit={addUser} userToEdit={editingUser} />
    </div>
  );
}

export default App;