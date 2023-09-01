import express from 'express'
import cors from 'cors'
import compression from 'compression'


// routes
import authRoutes from '../routes/authRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import dbConnect from '../config/db.postgres.js'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8080
    this.paths = {
      auth: '/api/auth',
      users: '/api/users',
    }
    this.coneccionDB()
    this.middlewares()
    this.routes()
  }


  async coneccionDB() {
    try {
      await dbConnect.authenticate()
      await dbConnect.sync()
      console.log('DB online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.paths.auth, authRoutes)
    this.app.use(this.paths.users, userRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    })
  }
}


export default Server