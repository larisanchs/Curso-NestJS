// O controller é a camada responsável por receber requisições HTTP dos clientes e retornar respostas.

import { Controller, Get } from '@nestjs/common'
import { HelloService } from './hello.service' // Importa o serviço que contém a lógica da aplicação

@Controller() // O @Controller() habilita a classe "HelloController" para receber requisições REST
export class HelloController{

    constructor(private service : HelloService){} // O constructor serve para que o NestJS injete automaticamente uma instância do HelloService.

    @Get("/hello") // Esse decorator define uma rota HTTP do tipo GET. Ou seja, quando alguém acessar "http://localhost:3000/hello", o NestJS vai executar o método hello().
    hello() : string{ // Cria o método que executa a lógica definida no "hello.service.ts", passando o nome Larissa como parâmetro.
        return this.service.hello("Larissa");
    }
}