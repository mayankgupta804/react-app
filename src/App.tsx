import axios, { CanceledError } from 'axios';
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios.
      get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal }).
      then((res) => {
        setUsers(res.data);
        setLoading(false);
      }).
      catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p>{error.code}</p>}
      {isLoading &&
        <div className="spinner-border"></div>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
