import { Injectable } from '@nestjs/common';
import { Person, PersonUpdatingRequest } from './person';

@Injectable()
export class PeopleService {

    people : Person[] = [{id: 1, name: "Larissa"}] // Aqui está simulando um banco de dados em memória.

    list() : Person[] {    // O método "list" lista as pessoas cadastradas em um array.
        return this.people  // Retorna a lista de pessoas cadastradas no array.
    }

    findById(id : number) : Person { // O método "findById" recebe o parâmetro "id" do tipo number, e retorna como resposta uma "person".
        const foundPerson = this.people.find(person => person.id == id) // O objeto "foundPerson" armazena a pessoa que possui o id igual ao que foi passado no parâmetro, através da function que filtra as pessoas com base no parâmetro. Ou seja, as pessoas que tiverem o id diferente do qual foi passado no parâmetro retornarão "false", e a pessoa que possuir o id igual ao que foi passado no parâmetro retornará "true".

        return foundPerson; // Retorna a pessoa com o id igual ao que foi passado no parâmetro.

        // Podemos fazer também dessa forma (para ficar mais simplificado): return this.people.find(people => person.id == id)
    }

    save( person : Person ) { // O método save cadastra uma "person" na lista "people" através da função "push". Esse método recebe o parâmetro person, do tipo Person.
        return this.people.push(person); // Método que irá cadastrar uma pessoa (person) em na lista "people".
    }

    update( id : number, updatingPerson : PersonUpdatingRequest ){
        this.people.forEach(person => {
            if (id == person.id) {
                person.name = updatingPerson.name;
            }
        })
    }

    delete( id : number ){
        const newList = this.people.filter(person => person.id != id)
        this.people = newList;
    }
}
