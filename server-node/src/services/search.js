import {getFile} from './getFile'
import xlsx from 'xlsx'

/**
 * Search query that is passed from the frontend and return a JSON object
 * @param {String} query
 * @return String
 */
export const searchTitle = (query) => {
  const data = getFile()
  const dataObj = xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]])

  dataObj.map((d) => {
    if(d.Title.includes(query))
      return d.Title
  })
  return 'Not found'
}

export const searchIngredient  = (query) => {
  const data = getFile()
  const dataObj = xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]])

  dataObj.map((d) => {
    if(d.Title.includes(query))
      return d.Title
  })
  return 'Not found'
}