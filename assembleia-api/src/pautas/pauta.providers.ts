import { DataSource, Repository } from "typeorm";
import { Pauta } from './pauta.entity';
import { Provider } from '@nestjs/common';

const pautaRepository: Provider<Repository<Pauta>> = { // Essa tipagem significa que esse provider irá fornecer um Repository da entidade Pauta. Ou seja, o que vem depois dos dois pontos (:) especifica o que a constante (const) está provendo. Nesse caso, o provider está provendo um repositório de pauta.
    provide: 'PAUTA_REPOSITORY',

    // O "DataSource" tem o método "getRepository", onde você passa uma classe, e esse método retorna para você um repositório da entidade. Nesse caso, foi retornado o repositório da entidade Pauta.
    useFactory: (dataSource: DataSource) => {
        const repository: Repository<Pauta> = dataSource.getRepository(Pauta);
        return repository;
    }, 
    inject: ['DATA_SOURCE']
}

export const pautaProviders: Provider[] = [pautaRepository]