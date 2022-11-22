import { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ handleAddUser }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });

      return;
    }

    if (+age < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });

      return;
    }

    handleAddUser({ name: username, age });

    setAge('');
    setUsername('');
  };

  return (
    <>
      <ErrorModal error={error} />
      <Card>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
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
          <button
            type='submit'
            className='place-self-center border px-2 py-1 rounded-md text-white font-medium bg-black'>
            Add User
          </button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
