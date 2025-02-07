import { AxiosInstance } from "axios";
import getAxiosInstance, {CanceledError} from "./api-client";

export interface User {
  id: number;
  name: string;
}

export default class UserService {

  client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = getAxiosInstance(baseUrl);
  }

  getAllUsers() {
    const controller = new AbortController();

    const request =  this.client.get<User[]>("/users", { signal: controller.signal });

    return {request, cancel: () => controller.abort(), cancelled: CanceledError}
  }

  deleteUser(id: number) {
    return this.client.delete<User>("/users/" + id);
  }

  addUser(user: User) {
    return this.client.post<User>("/users/", user);
  }

  updateUser(user: User) {
    return this.client.patch<User>("/users/" + user.id, user);
  }
}
