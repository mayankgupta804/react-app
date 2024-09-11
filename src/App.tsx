import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface Error {
  name: string;
  message: string;
  code: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setErr(err))
      .finally(() => setIsLoading(false));
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));
    axios
      .delete<User>("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErr(err);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: "11",
      name: "Mayank",
      email: "mayank@gupta.com",
      username: "mayank",
    };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setErr(err);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {err && (
        <>
          <p className="text-danger">{err.name}</p>
          <p className="text-danger">{err.message}</p>
          <p className="text-danger">{err.code}</p>
        </>
      )}
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : (
        <>
          <button className="btn btn-primary mb-3" onClick={addUser}>
            Add User
          </button>
          <p>User details:</p>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between"
              >
                {user.name}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
