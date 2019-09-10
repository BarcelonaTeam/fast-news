import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: String,
    subtitle: {
        type: String,
        required: false,
        default: 'אין כותרת משנה'
    },
    imageUrl: String,
    content: String,
    topic: String
});