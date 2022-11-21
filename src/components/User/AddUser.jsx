import { useState } from 'react';
import Card from '../UI/Card';

function AddUser() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 0) return;

    console.log(username, age);

    setAge('');
    setUsername('');
  };

  return (
    <Card>
      <form onSubmit={handleAddUser} className='flex flex-col gap-2'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          className='border-2'
          onChange={handleUsernameInput}
          value={username}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          className='border-2'
          onChange={handleAgeInput}
          value={age}
        />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
