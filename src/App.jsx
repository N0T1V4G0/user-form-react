import { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div className='App'>
      <AddUser handleAddUser={handleAddUser} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
