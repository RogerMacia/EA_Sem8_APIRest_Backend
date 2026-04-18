import express from 'express';
import controller from '../controllers/Log';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Logs
 *     description: Endpoints CRUD of logs
 *
 * components:
 *   schemas:
 *     Log:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB ObjectId
 *           example: "65f1c2a1b2c3d4e5f6789012"
 *         type:
 *           type: string
 *           enum: [create, update, read, delete]
 *           exemple: "create"
 *         entity:
 *           type: string
 *           enum: [user, org]
 *           exemple: "user"
 *         name:
 *           type: string
 *           example: "User1"
 *         description:
 *           type: string
 *           exemple: "Created new user with name User1, email u1@gmail.com and to assigned to organization Org1."
 *         date:
 *           type: string
 *           exemple: "2026-04-17T16:43:57.000Z"
 *     LogCreate:
 *       type: object
 *       required:
 *         - type
 *         - entity
 *         - name
 *       properties:
 *         type:
 *           type: string
 *           enum: [create, update, read, delete]
 *           exemple: "create"
 *         entity:
 *           type: string
 *           enum: [user, org]
 *           exemple: "user"
 *         name:
 *           type: string
 *           example: "User1"
 *     LogUpdate:
 *       type: object
 *       required:
 *         - type
 *         - entity
 *         - name
 *       properties:
 *         type:
 *           type: string
 *           enum: [create, update, read, delete]
 *           exemple: "create"
 *         entity:
 *           type: string
 *           enum: [user, org]
 *           exemple: "user"
 *         name:
 *           type: string
 *           example: "User1"
 */

/**
 * @openapi
 * /logs:
 *   post:
 *     summary: Creates a new log
 *     tags: [Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogCreate'
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
router.post('/', controller.createLog);

/**
 * @openapi
 * /logs/{logId}:
 *   get:
 *     summary: Get a log by an ID
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: logId
 *         required: true
 *         schema:
 *           type: string
 *         description: Log's ObjectId
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *       500:
 *         decription: Server error
 */
router.get('/:logId', controller.getLog);

/**
 * @openapi
 * /logs:
 *   get:
 *     summary: Get all logs
 *     tags: [Logs]
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *       500:
 *         decription: Server error
 */
router.get('/', controller.getLogs);

/**
 * @openapi
 * /logs/{logId}:
 *   put:
 *     summary: Update a log with its ID
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: logId
 *         required: true
 *         schema:
 *           type: string
 *         description: Log's ObjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogUpdate'
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *       500:
 *         decription: Server error
 */
router.put('/:logId', controller.updateLog);

/**
 * @openapi
 * /logs/{logId}:
 *   delete:
 *     summary: Delete a log by its ID
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: logId
 *         required: true
 *         schema:
 *           type: string
 *         description: Log's ObjectId
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 *       500:
 *         decription: Server error
 */
router.delete('/:logId', controller.deleteLog);

export default router;
