import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { GenericBody } from './crud.interface';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    constructor(
        private readonly crudService: CrudService,
    ){}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(
        @Body() request: GenericBody,
    ): Promise<any>{
        try {
            const response = await this.crudService.create(request)

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
            const response = await this.crudService.read(cpf)

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
            const response = await this.crudService.update(cpf, request)

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
            const response = await this.crudService.delete(cpf)

            return response
        } catch(error) {
            throw error
        }
    }
}
