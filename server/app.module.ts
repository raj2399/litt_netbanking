import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';


@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/litt-netbanking/browser')
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
