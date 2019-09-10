import * as mongoose from 'mongoose';

export const FlashSchema = new mongoose.Schema({
    time: String,
    title: String,
    content: String
});