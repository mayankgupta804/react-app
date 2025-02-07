import axios,{CanceledError} from "axios";

export default function getAxiosInstance(baseURL: string) {
  return axios.create({
    baseURL: baseURL
  });
}


export { CanceledError };
