import { model, Schema, Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    lastname: string;
    business: string;
    phone: string;
    email: string;
    image: string;
    role: string;
}

const ContactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    business: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    photo: {
        type: String
    },
    role: {
        type: String
    }
});

export default model<IContact>('Contact', ContactSchema);