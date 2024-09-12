import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

interface Error {
    name: string;
    message: string;
    code: string;
  }

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [err, setErr] = useState<Error>();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => setUsers(res.data))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErr(err);
        })
        .finally(() => setIsLoading(false));
  
      return () => cancel();
    }, []);

    return {users,setUsers ,err, setErr, isLoading}
};

export default useUsers;