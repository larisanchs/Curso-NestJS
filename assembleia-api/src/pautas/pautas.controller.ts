import { Controller, Body, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { PautasService } from './pautas.service';
import { CriarPautaResource, toDomain } from './pautas.resource';
import { Pauta } from './pauta.entity';

@Controller('pautas')
export class PautasController{

    constructor( private readonly pautasService : PautasService ){}

    // Aqui usamos o "async" e o await para que só depois que o service salvar a pauta o banco, o controller retornar a pauta salva.
    @Post()
    async save( @Body() pauta: CriarPautaResource, @Res() response: Response ){

        const pautaDomain: Pauta = toDomain(pauta); 
        const pautaSalva = await this.pautasService.save(pautaDomain)
        return response.status(201).send(pautaSalva);
    }
}