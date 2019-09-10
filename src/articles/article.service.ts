import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article.interface';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

    async fetchAllArticles() {
        return await this.articleModel.find();
    }

    async fetchFeedArticles() {
        return await this.articleModel.find({ topic: { $exists: true, $ne: '' } });
    }

    async fetchMainArticle() {
        return await this.articleModel.findOne({ topic: { $eq: '' } });
    }

    async createArticle(createArticleDto: CreateArticleDto) {
        const article = new this.articleModel(createArticleDto);

        return await article.save();
    }
}
