import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pauta } from './pauta.entity';
import { Result } from 'src/common/result';

@Injectable()
export class PautasService {
    constructor(
        @Inject('PAUTA_REPOSITORY')
        private readonly  pautaRepository: Repository<Pauta>
    ){}
    
    // Tudo que é executado dentro do Repository é assíncrono, por isso surge a necessidade de fazer com que a aplicação realize primeiro a consulta, para que depois ela execute o "if" para retornar true ou false.

    // Para isso, temos que transformar o método save() em assíncrono, e consequentemente, conseguir usar a palavra "await" (esperar), para que ocorra primeiro a consulta da descrição e, quando essa consulta for finalizada, aí sim que o "if" será executado. Por fim, o método save() que retorna a pauta também será assíncrono para que ele salve a pauta somente após a consulta e o "if".
    // OBS: Não podemos usar a palavra "await" sem declarar antes que o método é "async".

    async save(pauta: Pauta) : Promise<Result<Pauta>> {
        const descricao = pauta.descricao;
        const possivelPauta = await this.pautaRepository.findOne({where: {
            descricao: descricao
        }
    });
    if (possivelPauta){
        return new Result(null, new Error("Pauta existente"));
    }

        pauta = await this.pautaRepository.save(pauta)

        return new Result(pauta, null);
    }
}