import axios from 'axios'
import {SearchURLTypes} from "../types/SearchURLTypes";

export async function axiosCall(query: string, type: SearchURLTypes){
  return await axios.get(
    type + query,
    {
      baseURL: '/'
    }
  )
}