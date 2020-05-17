import {parse} from 'url'
import {searchIngredient, searchTitle} from "../services/search";

const handleRequest = (request, response) => {
  response.writeHead(200, {'Content-type': 'application/json'})
  const path = parse(request.url, true)

  //Switch statement to identify route and call service
  switch (path.pathname) {
    case '/search/title':
      console.log('searching title for: ' + path.query.query)
      searchTitle(path.query.query)
        .then((res) => {
          response.write(JSON.stringify(res))
          response.end()
        })
        .catch((err) => console.log(err))
      break

    case '/search/ingredient':
      console.log('searching ingredient for: ' + path.query.query)
      searchIngredient(path.query.query)
        .then((res) => {
          response.write(JSON.stringify(res))
          response.end()
        })
        .catch((err) => console.log(err))
      break

    default:
      response.writeHead(404)
      response.write('Route not found')
      response.end()
  }
}

export {handleRequest}