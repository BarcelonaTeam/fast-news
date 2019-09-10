import { Controller, Get, Post, Body } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './create-topic.dto';

@Controller('topics')
export class TopicsController {
    constructor(private readonly topicService: TopicsService) {}

    @Get()
    async getAllTopics() {
        return this.topicService.fetchAllTopics();
    }

    @Post()
    async addTopic(@Body() createTopicDto: CreateTopicDto) {
        return await this.topicService.createTopic(createTopicDto);
    }
}
