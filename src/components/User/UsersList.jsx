import Card from '../UI/Card';

function UsersList({ users }) {
  return (
    <Card>
      <ul>
        {users.map((u, i) => (
          <li key={i} className='border p-1'>
            {u.name} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

UsersList.defaultProps = {
  users: [
    {
      name: 'Lucas',
      age: '21',
    },
  ],
};

export default UsersList;
