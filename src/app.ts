import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.routes'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

app.use('/api/v1/users/', usersRouter)

// testing

app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUser({
  //   id: '999',
  //   password: '1234',
  //   role: 'student',
  // })
  res.send('Setup Complete')
})

export default app
