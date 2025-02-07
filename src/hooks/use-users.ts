import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);

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

  return { users, setUsers, error,setError, isLoading };
}

export default useUsers;
