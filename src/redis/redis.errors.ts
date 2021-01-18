import { HttpException, HttpStatus } from '@nestjs/common'

export interface RedisNotConnectedOptions {
  host: string
  port: string
}

export class InvalidKey extends HttpException {
  constructor() {
    super('invalid_key', HttpStatus.BAD_REQUEST)
    Error.captureStackTrace(this, InvalidKey)
  }
}

export class RedisNotConnected extends HttpException {
  constructor(options: RedisNotConnectedOptions) {
    const formatted = {
      errors: [
        {
          error: 'redis not connected',
          path: `${options.host}:${options.port}`,
        },
      ],
      message: 'srn:error:bad_gateway',
    }
    super(formatted, HttpStatus.BAD_GATEWAY)
    Error.captureStackTrace(this, RedisNotConnected)
  }
}

export class InvalidValue extends Error {
  constructor() {
    super('invalid_value')
    Error.captureStackTrace(this, InvalidKey)
  }
}
