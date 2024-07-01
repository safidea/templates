import dotenv from 'dotenv'
dotenv.config({ path: '.env.example' })

import App from '@safidea_/engine'
import { app as config } from './app'

const app = new App()
const url = await app.start(config)

console.log(`Blog server started at ${url}`)
