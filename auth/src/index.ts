import { app } from './app'
import mongoose from 'mongoose'


const start = async () => {
    // Need to check first so typescript loads it to container
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
        console.log('connected to mongodb')
    } catch (err) {

    }

    app.listen(3000, () => {
        console.log('listening on port 3000. hello')
    })
}

start()