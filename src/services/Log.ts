import mongoose from 'mongoose';
import Log, { ILogModel, ILog } from '../models/Log';

const createLog = async (data: Partial<ILog>): Promise<ILogModel> => {
    const log = new Log(data);
    const savedLog = await log.save();

    return savedLog;
};

const getLog = async (logId: string): Promise<ILog> => {
    return await Log.findById(logId).lean();
}

const getLogs = async (): Promise<ILog[]> => {
    return await Log.find().sort({ date: -1} ).lean();
}

const updateLog = async (logId: string, data: Partial<ILog>): Promise<ILog | null> => {
    const log = await Log.findById(logId);

    if (!log) return null;

    log.set(data);
    return await log.save();
}

const deleteLog = async (logId: string): Promise<ILog> => {
    return Log.findByIdAndDelete(logId).lean();
}

export default { createLog, getLog, getLogs, updateLog, deleteLog };
