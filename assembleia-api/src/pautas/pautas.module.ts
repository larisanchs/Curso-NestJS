import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { pautaProviders } from './pauta.providers';
import { PautasService } from './pautas.service';

@Module({
    imports: [DatabaseModule],
    providers: [PautasService, ...pautaProviders]
})

export class PautasModule {};