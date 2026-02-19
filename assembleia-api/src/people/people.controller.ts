import { Controller, Res, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { PeopleService } from './people.service';
import { Person, PersonUpdatingRequest } from './person'

@Controller('people')
export class PeopleController {

    constructor( private peopleService : PeopleService) {}

    @Get()
    list(@Res() response: Response) { // Quando você usa @Res(), o Nest deixa você controlar tudo manualmente. Ou seja, isso possibilita que a resposta seja controlada manualmente.
        const list = this.peopleService.list(); // Chama o método list() do service e retorna o array de pessoas.
        return response.status(200).send(list); // Define status HTTP 200 (OK) e envia o array como resposta.
    }

    @Get('/:id') // :id → diz que a rota terá um valor variável
    getById( @Param('id') id : number, @Res() response : Response) { // @Param('id') → pega esse valor da URL
        const person = this.peopleService.findById(id);
        if (!person){ // Se a pessoa com o id passado no parâmetro não existir, retornará o código de status 404 not found.
            return response.status(404).send();
        }
        else{ // Se a pessoa existir, retornará o código de status 200 sucess.
            return response.status(200).send(person);
        }
    }

    @Post()
    save(@Body() person: Person, @Res() response: Response){ // Iremos receber um objeto do tipo Person (com id e name) no corpo (body) da requisição. Além disso, injetamos uma response para dar uma resposta ao usuário.
        this.peopleService.save(person); // Método que salva a "person".
        return response.status(201).send("Salvo com sucesso"); // Envia a response para o usuário.
    }

    @Put('/:id') // :id → diz que a rota terá um valor variável
    update( @Param('id') id : number, @Body() personUpdateData : PersonUpdatingRequest, @Res() response : Response) { // @Param('id') → pega esse valor da URL
        
        const person = this.peopleService.findById(id);
        
        if (!person){ // Se a pessoa com o id passado no parâmetro não existir, retornará o código de status 404 not found.
            return response.status(404).send();
        }
        else{ // Se a pessoa existir, será feita a atualização dos dados e irá retornar o código de status 204 de sucesso sem retorno.
            this.peopleService.update(id, personUpdateData);
            return response.status(204).send("Atualizado com sucesso!");
        }
    }

    @Delete('/:id') // :id → diz que a rota terá um valor variável
    delete( @Param('id') id : number, @Res() response : Response) { // @Param('id') → pega esse valor da URL
        const person = this.peopleService.findById(id);
        if (!person){ // Se a pessoa com o id passado no parâmetro não existir, retornará o código de status 404 not found.
            return response.status(404).send();
        }
        else { // Se a pessoa existir, retornará o código de status 204 sucess.
            this.peopleService.delete(id);
            return response.status(204).send();
        }
    }
}