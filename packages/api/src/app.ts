import { Application } from '@curveball/core'

/* Middlewares */
import accessLog from '@curveball/accesslog'
import problem from '@curveball/problem'
import bodyParser from '@curveball/bodyparser'
import { jsonOnly } from './middleware/json-only'

import routes from './routes'

const app = new Application()

/* Middlewares */
/* TODO: Find a better logging solution */
if (process.env.NODE_ENV === 'development') app.use(accessLog())

/* Returns application/problem+json for @curveball/http-errors, 500 for any other */
app.use(problem())

/* This body parser is not very flexible, consider rolling one, if you want to force JSON body */
app.use(bodyParser())

/* Force JSON only responses */
app.use(jsonOnly())

app.use(...routes)

export default app
