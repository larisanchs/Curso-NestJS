import { Injectable } from "@nestjs/common";

@Injectable() // Esse decorator permite que o NestJS possa injetá-la em outras classes (como no controller).
export class HelloService{

    // Método que contém a lógica da aplicação. Ele recebe um nome como parâmetro e retorna uma mensagem personalizada.
    hello(name) : string{
        return `Hello ${name}!` // A crase (`) permite criar uma string dinâmica (template string).
    }
}