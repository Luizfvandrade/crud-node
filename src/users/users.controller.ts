import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { GenericBody } from './users.interface';
import { UsersService } from './users.service';

@Controller('crud')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ){}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(
        @Body() request: GenericBody,
    ): Promise<any>{
        try {
            const response = await this.usersService.create(request)

            return response
        } catch(error) {
            throw error
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async read(
        @Param('id') cpf: string,
    ): Promise<any>{
        try {
            const response = await this.usersService.read(cpf)

            return response
        } catch(error) {
            throw error
        }
    }

    @HttpCode(HttpStatus.OK)
    @Put(':id')
    async update(
        @Param('id') cpf: string,
        @Body() request: GenericBody,
    ): Promise<any>{
        try {
            const response = await this.usersService.update(cpf, request)

            return response
        } catch(error) {
            throw error
        }
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async delete(
        @Param('id') cpf: string,
    ): Promise<any>{
        try {
            const response = await this.usersService.delete(cpf)

            return response
        } catch(error) {
            throw error
        }
    }
}
