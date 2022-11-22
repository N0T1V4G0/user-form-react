import Card from '../UI/Card';

function UsersList({ users }) {
  return (
    <Card>
      <ul className='flex flex-col gap-2 mt-2 mb-2'>
        {users.map((u, i) => (
          <li key={i} className='border p-1'>
            {u.name} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
