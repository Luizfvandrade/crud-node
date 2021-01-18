import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { ValidatorService } from '../validator/validator.service';

import { RequestBody } from './crud.interface';

@Controller('crud')
export class CrudController {
    constructor(
        private readonly validatorService: ValidatorService,

    ){}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(
        @Body() request: RequestBody,
    ): Promise<any>{

    }

    @HttpCode(HttpStatus.OK)
    @Get('id')
    async read(
        @Param('id') cpf: string,
    ): Promise<any>{

    }

    @HttpCode(HttpStatus.OK)
    @Put('id')
    async update(
        @Param('id') cpf: string,
        @Body() request: RequestBody,
    ): Promise<any>{

    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put()
    async delete(
        @Param('id') cpf: string,
    ): Promise<any>{

    }
}
