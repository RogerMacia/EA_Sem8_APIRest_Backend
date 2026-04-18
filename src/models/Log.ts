import mongoose, { Document, Schema } from 'mongoose';

export interface ILog {
    type: 'create' | 'update' | 'read' | 'delete';
    entity: 'user' | 'org';
    name: string;
    description?: string;
    date?: Date;
}

export interface ILogModel extends ILog, Document {}

const LogSchema: Schema = new Schema(
    {
        type: { type: String, enum: ['create', 'update', 'read', 'delete'], required: true },
        entity: { type: String, enum: ['user', 'org'], required: true },
        name: { type: String, required: true },
        description: { type: String },
        date: { type: Date, required: true, default: Date.now },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ILogModel>('Log', LogSchema);
