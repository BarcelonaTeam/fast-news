import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicSchema } from './topic.schema';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Topic',
        schema: TopicSchema
    }])],
    controllers: [TopicsController],
    providers: [TopicsService]
})
export class TopicModule {}
