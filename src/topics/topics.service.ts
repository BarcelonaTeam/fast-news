import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic } from './topic.interface';
import { CreateTopicDto } from './create-topic.dto';

@Injectable()
export class TopicsService {
    constructor(@InjectModel('Topic') private readonly topicModel: Model<Topic>) {}

    async fetchAllTopics() {
        return await this.topicModel.find();
    }

    async createTopic(createTopicDto: CreateTopicDto) {
        const topic = new this.topicModel(createTopicDto);

        return await topic.save();
    }
}
