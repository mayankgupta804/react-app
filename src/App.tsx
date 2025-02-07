import { useEffect, useState } from 'react';
import UserService, { User } from './services/user-service';

interface Error {
  code: string;
  message: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);

  const userService = new UserService("https://jsonplaceholder.typicode.com");

  useEffect(() => {
    const { request, cancel, cancelled } = userService.getAllUsers();

    request.
      then((res) => {
        setUsers(res.data);
        setLoading(false);
      }).
      catch((err) => {
        if (err instanceof cancelled) return;
        setError(err);
        setLoading(false);
      });

    return cancel;
  }, []);

  const handleDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter(user => user.id != id));
    userService.
      deleteUser(id).
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
    userService.
      addUser(newUser).
      then(({ data: savedUser }) => setUsers([savedUser, ...users])).
      catch((err) => {
        setUsers(originalUsers);
        setError(err);
      });
  }

  const handleUpdate = (id: number) => {
    const originalUsers = [...users];
    const updatedUser = { id: id, name: "Gorky" };
    setUsers(users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    }));
    userService.
      updateUser(updatedUser).
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
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => handleUpdate(user.id)}>
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="btn btn-danger">
                Delete
              </button>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
