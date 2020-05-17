import axios from 'axios'
import {SearchURLTypes} from "../types/SearchURLTypes";

export async function axiosCall(query: string, type: SearchURLTypes){
  console.log(type + query)

  return await axios.get(
    type + query,
    {
      baseURL: '/'
    }
  )
}