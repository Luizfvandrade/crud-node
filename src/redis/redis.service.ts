import { Injectable } from '@nestjs/common'

import { isNil } from 'lodash'
import * as Redis from 'ioredis'

import { ConfigService } from '@nestjs/config'

import { InvalidKey, InvalidValue, RedisNotConnected } from './redis.errors'

@Injectable()
export class RedisService {
  private readonly cachePrefix = 'user'
  private readonly config: Redis.RedisOptions
  readonly client: Redis.Redis

  constructor(private readonly configService: ConfigService) {
    this.config = {
      host: this.configService.get('REDIS_HOST', 'localhost'),
      port: Number(this.configService.get<number>('', 6379)),
    }
    this.client = this.connect()
  }

  connect(): Redis.Redis {
    const client = new Redis(this.config)
    client.on('connect', this.handleConnect(this.config))
    client.on('error', this.handleConnectError)
    return client
  }

  handleConnect = (options: Redis.RedisOptions) => {
    return () => {
      const { host, port } = options
      console.log(`cache connected to ${host}:${port}`)
    }
  }

  handleConnectError = (error: Error): void => {
    console.log(`cache connection error: ${error.message}`)
  }

  checkConnection(): boolean {
    if (this.client.status === 'ready') return true
    throw new RedisNotConnected(this.config)
  }

  async get(key: string): Promise<any> {
    if (isNil(key)) throw new InvalidKey()
    try {
      const cacheResponse = await this.client.get(`${this.cachePrefix}:${key}`)
      if (!cacheResponse) {
        return null
      }

      const response = JSON.parse(cacheResponse)

      return response
    } catch (error) {
      throw error
    }
  }

  async set(key: string, value: any): Promise<any> {
    if (isNil(key)) throw new InvalidKey()
    if (isNil(value)) throw new InvalidValue()

    return new Promise((resolve, reject) => {
      this.client.set(
        `${this.cachePrefix}:${key}`,
        JSON.stringify(value),
        (error) => {
          if (error) reject(error)
          resolve(value)
        },
      )
    })
  }

  del(key: string): Promise<string> {
    if (isNil(key)) throw new InvalidKey()
    return this.client.del(`${this.cachePrefix}:${key}`)
  }
}
