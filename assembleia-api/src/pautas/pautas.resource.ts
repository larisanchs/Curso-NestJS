// Classe que transfere dados para outros objetos. Nesse caso, ela estpa servindo para a criação do método save() no Controller.

import { identity } from "rxjs";
import { Pauta } from "./pauta.entity";

export class CriarPautaResource{
    descricao: string;
}

// Criando uma classe que retornará uma pauta. Ou seja, isso será um objeto representacional que retornará um objeto do tipo pauta (retornará o id, descrição e status, que é o que importa para o cliente)
export class PautaResource {
    id: string;
    descricao: string;
    status: string;
}

export class NovaSessaoResource {
    minutos: number;
}

// Criando um método que vai receber a entidade Pauta, e vai retornar o PautaResource.
export function toRepresentation(entity: Pauta) : PautaResource {
    const resource = new PautaResource();
    resource.id = entity.id;
    resource.descricao = entity.descricao;
    resource.status = entity.obterStatus();
    return resource;
}

// Exportando uma função que vai converter para domínio esse resource. Vai servir para a gente transformar o CriarPautaResource em domínio, que o domínio é a pauta.
export function toDomain(resource: CriarPautaResource) : Pauta {
    const pauta = new Pauta();
     pauta.descricao = resource.descricao;
     return pauta; 
}