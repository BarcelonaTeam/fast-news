import { Document } from "mongoose";

export interface Topic extends Document {
    name: string;
    value: string;
}