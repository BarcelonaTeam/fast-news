import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicModule } from './topics/topics.module';
import { ArticleModule } from './articles/article.module';
import { FlashModule } from './flashes/flashes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/news'), TopicModule, ArticleModule, FlashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
