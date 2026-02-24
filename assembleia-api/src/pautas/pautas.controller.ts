import { Controller, Body, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { PautasService } from './pautas.service';
import { CriarPautaResource } from './pautas.resource';

@Controller('pautas')
export class PautasController{

    constructor( private readonly pautasService : PautasService ){}

    @Post()
    save( @Body() pauta: CriarPautaResource, @Res() response: Response ){
        return response.status(201).send(pauta);
    }
}