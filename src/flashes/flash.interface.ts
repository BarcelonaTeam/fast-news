import { Document } from "mongoose";

export interface Flash extends Document {
    time: string;
    title: string;
    content: string;
}