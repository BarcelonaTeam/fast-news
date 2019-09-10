import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flash } from './flash.interface';
import { CreateFlashDto } from './create-flash.dto';

@Injectable()
export class FlashService {
    constructor(@InjectModel('Flash') private readonly flashModel: Model<Flash>) {}

    async fetchAllFlashes() {
        return await this.flashModel.find();
    }

    async createFlash(createFlashDto: CreateFlashDto) {
        const flash = new this.flashModel(createFlashDto);

        return await flash.save();
    }
}
