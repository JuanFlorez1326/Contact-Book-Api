import { model, Schema, Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    lastname: string;
    business: string;
    phone: string;
    email: string;
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
    }
});

export default model<IContact>('Contact', ContactSchema);