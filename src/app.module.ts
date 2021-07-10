import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import Keys from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(Keys.MONGO_URI), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
