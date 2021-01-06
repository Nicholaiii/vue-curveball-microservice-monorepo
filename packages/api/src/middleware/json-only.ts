import { Middleware } from '@curveball/core'

export function jsonOnly (): Middleware {
  return async function (ctx, next) {
    /* Make all responses JSON */
    ctx.response.headers.set('Content-Type', 'application/json')

    await next()

    /* Force responses to be JSON */
    if (!ctx.response.is('json') || typeof ctx.response.body !== 'object') {
      throw new Error('Response was expected to be JSON')
    }
  }
}

