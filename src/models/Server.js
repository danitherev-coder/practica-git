import express from 'express'
import cors from 'cors'
import compression from 'compression'


// routes
import userRoutes from '../routes/userRoutes.js'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8080
    this.paths = {
      auth: '/api/auth',
      users: '/api/users',
    }
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.paths.auth)
    this.app.use(this.paths.users, userRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    })
  }
}


export default Server