import axios, { CanceledError } from "axios";
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

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err);
      });

    return () =>
      controller.abort("Request cancelled because the user moved away");
  }, []);

  return (
    <>
      {err ? (
        <>
          <p className="text-danger">{err.name}</p>
          <p className="text-danger">{err.message}</p>
          <p className="text-danger">{err.code}</p>
        </>
      ) : (
        <>
          <p>User details</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
