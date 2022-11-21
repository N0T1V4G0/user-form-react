import Card from '../UI/Card';

function AddUser() {
  const handleAddUser = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={handleAddUser} className='flex flex-col gap-2'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' className='border' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' className='border' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
