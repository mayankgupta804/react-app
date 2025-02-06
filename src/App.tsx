import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface Error {
  code: string;
  message: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    axios.
      get<User[]>("https://jsonplaceholder.typicode.com/usersx").
      then((res) => setUsers(res.data)).
      catch((err) => {
        setError(err);
      })
  }, [])

  return (
    <>
      {error && <p>{error.code}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
