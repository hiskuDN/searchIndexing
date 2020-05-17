import {axiosCall} from "../helper/axiosReq";
import {SearchURLTypes} from "../types/SearchURLTypes";
import {SearchResponseModel} from "../model/SearchResponseModel";

export async function searchTitle(query: string) {
  let data = await axiosCall(query, SearchURLTypes.TITLE)
  return data.data
    // .then((data) => {
    //   return data
    // })
    // .catch(err => console.log(err.message))
  // return dataList
}

export function searchIngredient(query: string): SearchResponseModel[] {
  axiosCall(query, SearchURLTypes.INGREDIENT)
  return []
}