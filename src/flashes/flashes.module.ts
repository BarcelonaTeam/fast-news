import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlashSchema } from './flash.schema';
import { FlashesController } from './flashes.controller';
import { FlashService } from './flashes.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Flash',
        schema: FlashSchema
    }])],
    controllers: [FlashesController],
    providers: [FlashService]
})
export class FlashModule {}
