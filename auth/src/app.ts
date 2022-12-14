import express from 'express'
import cookieSession from 'cookie-session'
import 'express-async-errors'
import { json } from 'body-parser'
import mongoose from 'mongoose'

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from '@wito/common';
import { NotFoundError } from '@wito/common';

const app = express();
app.set('trust proxy', true)
app.use(json())
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
    // check by ingress first, go to this handler then. http://vlook.dev/api/users/signupXXX
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }