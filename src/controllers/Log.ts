import { NextFunction, Request, Response } from 'express';
import LogService from '../services/Log';

const createLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const log = await LogService.createLog(req.body);
        return res.status(201).json(log);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const log = await LogService.getLog(req.params.logId);
        return log ? res.status(200).json(log) : res.status(404).json("Log not found");
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const logs = await LogService.getLogs();
        return logs ? res.status(200).json(logs) : res.status(404).json("Logs not found");
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const logs = await LogService.updateLog(req.params.logId, req.body);
        return logs ? res.status(200).json(logs) : res.status(404).json("Log not found");
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const log = await LogService.deleteLog(req.params.logId);
        return log ? res.status(200).json(log) : res.status(404).json("Log not found");
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createLog, getLog, getLogs, updateLog, deleteLog };
