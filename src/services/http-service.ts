import { AxiosInstance } from "axios";
import getAxiosInstance, {CanceledError} from "./api-client";

interface Entity {
  id: number;
}

export default class HTTPService {
  client: AxiosInstance;

  constructor(endpoint: string) {
    this.client = getAxiosInstance(endpoint);
  }

  getAll<T>(path: string) {
    const controller = new AbortController();

    const request =  this.client.get<T>(path, { signal: controller.signal });

    return {request, cancel: () => controller.abort(), cancelled: CanceledError}
  }

  delete(path: string, id: number) {
    return this.client.delete(path + "/" + id);
  }

  create<T>(path: string,data: T) {
    return this.client.post<T>(path + "/", data);
  }

  update<T extends Entity>(path: string, data: T) {
    return this.client.patch<T>(path + "/" + data.id, data);
  }
}
