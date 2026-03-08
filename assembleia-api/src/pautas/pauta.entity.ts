import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()

export class Pauta{

    @PrimaryGeneratedColumn() // Significa que esse id vai ser gerado pelo banco de dados, e esse id será a primary key (identificador).
    id?: string; // O ? serve para indicar que o id não irá ser obrigatório

    @Column() // Esse decorator serve para definir que é apenas uma coluna comum.
    descricao: string;

    @CreateDateColumn({ name: 'data_cadastro'}) // Esse decorator serve para que, quando eu criar esse registro, a data de cadastro será cadastrada automaticamente, sem que eu tenha que cadastrar a data de cadastro. Dentro dos parênteses, foi criado um objeto "{}", e foi colocada uma propriedade "name", que serve para definir o nome de uma coluna no banco de dados. Portanto, a propriedade name é usada para sobrescrever o nome de um campo.
    dataCadastro?: Date;

    @Column({ type: 'timestamp', nullable: true }) // O decorator define que será uma coluna comum. A propriedade "type" define o tipo de coluna que será criada no banco de dados, ou seja, nesse caso a coluna será "timestamp" (armazena a data e a hora). Já a propriedade "nullable" define que essa coluna poderá ser null, ou seja, não será obrigatório que essa columa seja preenchida quando eu estiver cadastrando uma pauta.
    abertura?: Date;

    @Column( {type: 'timestamp', nullable: true}) // O decorator define que será uma coluna comum.
    fechamento?: Date;

    obterStatus(): string {
        if (this.fechamento && this.fechamento < new Date()){
            return StatusPauta.ENCERRADA
        }

        if(this.abertura){
            return StatusPauta.INICIADA
        }

        return StatusPauta.NAO_INICIADA;
    }

    // Método para verificar se a pauta foi iniciada -> retorna True ou False
    public isFoiIniciada(): boolean {
        return this.isInStatus(StatusPauta.INICIADA);
    }

    // Método para verificar se a pauta já está encerrada -> retorna True ou False
    public isFoiEncerrada(): boolean {
        return this.isInStatus(StatusPauta.ENCERRADA);
    }
    
    // Método para verificar se é possível iniciar a sessão da pauta -> retorna True ou False
    public isPossivelIniciarSessao(): boolean {
        return this.isInStatus(StatusPauta.NAO_INICIADA);
    }

    // Método para verificar se a pauta está no status que vai ser passado no parâmetro
    public isInStatus(statusVerificar: StatusPauta) : boolean {
        const status = this.obterStatus();
        return status == statusVerificar;
    }
}

enum StatusPauta {
    NAO_INICIADA = 'Sessão não iniciada',
    INICIADA = 'Sessão Iniciada',
    ENCERRADA = 'Pauta Encerrada'
}