import express from 'express'
import todoRoutes from './routes/todoRoutes'


const app = express()

app.use(express.json())
app.use('/todo' ,todoRoutes)


app.listen(3001 , ()=> {
    console.log('server started')
})