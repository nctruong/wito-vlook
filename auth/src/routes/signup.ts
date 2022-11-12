import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator' // https://express-validator.github.io/docs/
import { RequestValidationError } from '../errors/request-validation-error'
import { DatabaseConnectionError } from '../errors/database-connection-error'
import { User } from '../models/user'
import { BadRequestError } from '../errors/bad-request-error'

const router = express.Router()

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email is invalid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('Password must be between 4 and 40 chars')
],
async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
    }
    console.log('Creating user...')

    const { email, password } = req.body 
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        throw new BadRequestError('User existed')
    }
    console.log(`existingUser: ${existingUser}`)
    const user = User.build({ email, password })
    await user.save()
    console.log('user created ')
    res.status(201).send(user)
})
export { router as signupRouter };