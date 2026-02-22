import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm'

export const databaseProviders: Provider[] = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'assembleia',
                entities: [
                    __dirname + '/../**/*.entity{ts,.js}'// Variável global que representa a pasta atual. Isso significa que o programa irá achar as entidades no projeto a partir do diretório atual, saindo dele, fazendo com que em qualquer pasta que tenha qualquer nome de arquivo + .entity + .ts ou .js  
                ],
                synchronize: true,
            })

            return dataSource.initialize();
        }
    }
]