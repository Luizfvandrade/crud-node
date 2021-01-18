import { Injectable } from '@nestjs/common';

import { RedisService } from '../redis/redis.service';

import { GenericBody } from './crud.interface';

@Injectable()
export class CrudService {

    constructor(
        private readonly redisService: RedisService
    ){ }

    async create(body: GenericBody): Promise<any> {
        const response = await this.redisService.set(body.cpf, body)
        return response
    }

    async read(cpf: string): Promise<any> {
        const response = await this.redisService.get(cpf)
        return response
    }

    async update(cpf: string, body: GenericBody): Promise<any> {
        if(cpf !== body.cpf) throw new Error('Id not match')
        
        const response = await this.redisService.set(cpf, body)
        return response
    }

    async delete(cpf: string): Promise<any> {
        const response = await this.redisService.del(cpf)
        return response
    }
}
