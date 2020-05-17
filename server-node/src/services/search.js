import {getFile} from './getFile'
import xlsx from 'xlsx'

/**
 * Search title query that is passed from the frontend and return a JSON array object
 * @param {String} query
 * @return []
 */
export const searchTitle = async (query) => {
  const data = getFile()
  const dataObj = await xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]])
  let tempList = []

  dataObj.map((d) => {
    if(d.Title.includes(query)) {
      tempList.push(d)
    }
  })

  return tempList
}

/**
 * Search allInfo query that is passed from the frontend and return a JSON array object
 * @param {String} query
 * @return []
 */
export const searchIngredient  = async (query) => {
  const data = getFile()
  const dataObj = await xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]])
  let tempList = []

  dataObj.map((d) => {
    if(d.data !== undefined && d.data.includes(query))
    if(d.data.includes(query)) {
      tempList.push(d)
    }
  })

  return tempList
}