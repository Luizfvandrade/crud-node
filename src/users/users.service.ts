import { Injectable } from '@nestjs/common';
import * as short from 'short-uuid';

import { RedisService } from '../redis/redis.service';

import { GenericBody } from './users.interface';

import { IdNotMatch } from './users.errors';

@Injectable()
export class UsersService {

    constructor(
        private readonly redisService: RedisService
    ){ }

    async create(body: GenericBody): Promise<any> {
        const newBody = {
            id: short.generate(),
            ...body
        }

        const response = await this.redisService.set(newBody.id, newBody)
        return response
    }

    async read(cpf: string): Promise<any> {
        const response = await this.redisService.get(cpf)
        return response
    }

    async update(id: string, body: GenericBody): Promise<any> {
        if(id !== body.id) throw new IdNotMatch(id)
        
        const response = await this.redisService.set(id, body)

        return response
    }

    async delete(cpf: string): Promise<any> {
        const response = await this.redisService.del(cpf)
        return response
    }
}
