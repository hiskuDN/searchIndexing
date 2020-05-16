import {parse} from 'url'
import {searchIngredient, searchTitle} from "../services/search";

const handleRequest = (request, response) => {
  response.writeHead(200, {'Content-type': 'application/json'})
  const path = parse(request.url)

  switch (path.pathname) {
    case '/search/title':
      console.log('searching....')
      response.write(searchTitle('test'))
      response.end()
      break
    case '/search/ingredient':
      console.log('searching')
      response.write(searchIngredient('test'))
      response.end()
      break
    default:
      response.writeHead(404)
      response.write('Route not found')
      response.end()
  }
}

export {handleRequest}