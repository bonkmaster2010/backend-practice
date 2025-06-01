import { Module } from '@nestjs/common';
import { testingModule } from './Modules/testing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ testingModule ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
