import {axiosCall} from "../helper/axiosReq";
import {SearchURLTypes} from "../types/SearchURLTypes";

export async function search(query: string, queryType: SearchURLTypes) {
  let data = await axiosCall(query, queryType)
  return data.data
}