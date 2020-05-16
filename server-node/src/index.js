import http from 'http'
import {handleRequest} from './api/searchAPI'

http.createServer(handleRequest).listen(3004)
console.log('Server running on port 3004')