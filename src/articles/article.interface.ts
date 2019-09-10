import { Document } from "mongoose";

export interface Article extends Document {
    title: string;
    subtitle?: string;
    imageUrl: string;
    content: string;
    topic: string;
}