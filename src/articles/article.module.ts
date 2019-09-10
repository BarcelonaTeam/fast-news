import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './article.schema';
import { ArticlesController } from './article.controller';
import { ArticlesService } from './article.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Article',
        schema: ArticleSchema
    }])],
    controllers: [ArticlesController],
    providers: [ArticlesService]
})
export class ArticleModule {}
