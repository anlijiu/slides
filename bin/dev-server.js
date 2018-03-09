const server = require('../server/main')
const debug = require('debug')('app:bin:dev-server')

server.listen(8080)
debug(`Server is now running at http://localhost:8080.`)
