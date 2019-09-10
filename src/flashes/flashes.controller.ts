import { Controller, Get, Post, Body } from '@nestjs/common';
import { FlashService } from './flashes.service';
import { CreateFlashDto } from './create-flash.dto';

@Controller('flash')
export class FlashesController {
    constructor(private readonly flashService: FlashService) {}

    @Get()
    async getAllFlashes() {
        return this.flashService.fetchAllFlashes();
    }

    @Post()
    async addFlash(@Body() createFlashDto: CreateFlashDto) {
        return await this.flashService.createFlash(createFlashDto);
    }
}
