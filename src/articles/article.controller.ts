import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateArticleDto } from './create-article.dto';
import { ArticlesService } from './article.service';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleService: ArticlesService) {}

    @Get()
    async getAllArticles() {
        return this.articleService.fetchAllArticles();
    }

    @Get('feed')
    async getFeedArticles() {
        return this.articleService.fetchFeedArticles();
    }

    @Get('main')
    async getMainArticle() {
        return this.articleService.fetchMainArticle();
    }

    @Post()
    async addArticle(@Body() createArticleDto: CreateArticleDto) {
        return await this.articleService.createArticle(createArticleDto);
    }
}
