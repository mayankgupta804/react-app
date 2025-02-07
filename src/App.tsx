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

  const handleDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter(user => user.id != id));
    axios.
      delete<User>("https://jsonplaceholder.typicode.com/usersx/" + id).
      then(res => console.log(res.status)).
      catch((err) => {
        setUsers(originalUsers);
        setError(err);
      });
  }

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mayank Gupta" };
    setUsers([...users, newUser]);
    axios.
      post<User>("https://jsonplaceholder.typicode.com/users/", newUser).
      then(({ data: savedUser }) => setUsers([savedUser, ...users])).
      catch((err) => {
        setUsers(originalUsers);
        setError(err);
      });

  }

  return (
    <>
      {error && <p className='text-danger mb-3'>{error.message}</p>}
      {isLoading &&
        <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map(user =>
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name}
            <button
              onClick={() => handleDelete(user.id)}
              className="btn btn-outline-danger">
              Delete
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
