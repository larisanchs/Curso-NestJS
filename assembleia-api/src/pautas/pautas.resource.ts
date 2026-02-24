// Classe que transfere dados para outros objetos. Nesse caso, ela estpa servindo para a criação do método save() no Controller.

import { Pauta } from "./pauta.entity";

export class CriarPautaResource{
    descricao: string;
}

// Exportando uma função que vai converter para domínio esse resource. Vai servir para a gente transformar o CriarPautaResource em domínio, que o domínio é a pauta.
export function toDomain(resource: CriarPautaResource) : Pauta {
     return{
        descricao: resource.descricao
     }; 
}