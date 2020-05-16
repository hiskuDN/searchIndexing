import {readFile} from 'xlsx'
import fs from 'fs'
import path from 'path'

/**
 * Read excel file and return it as an array of JSON
 * @return WorkBook
 * */
export const getFile = () => {
  return readFile(path.resolve('./src/assets/data.xlsx'))
}