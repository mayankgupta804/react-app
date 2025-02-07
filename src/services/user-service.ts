import HTTPService from "./http-service";

export interface User {
  id: number;
  name: string;
}

class UserService {

  service: HTTPService;
  path: string;

  constructor() {
    this.service = new HTTPService("https://jsonplaceholder.typicode.com");
    this.path = "/users"
  }

  getAllUsers() {
    return this.service.getAll<User[]>(this.path);
  }

  deleteUser(id: number) {
    return this.service.delete(this.path, id);
  }

  addUser(user: User) {
    return this.service.create<User>(this.path, user);
  }

  updateUser(user: User) {
    return this.service.update<User>(this.path, user);
  }
}

const create = () => new UserService();

export default create;
