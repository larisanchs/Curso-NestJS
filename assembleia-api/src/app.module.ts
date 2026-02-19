import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { PeopleModule } from './people/people.module';
import { PeopleController } from './people/people.controller';
import { PeopleService } from './people/people.service';
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [PeopleModule, DatabaseModule],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}