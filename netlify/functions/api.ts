// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from 'express';
import serverless from 'serverless-http';
import { POSTBody } from 'src/types';

const api = express();

api.use(express.json())

const records: POSTBody = []

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));
router.get('/get_records', (req, res) => res.send(records));
router.post('/add_records', (req, res) => {
  const result = req.body as POSTBody
  for (const record of result) {
    records.push(record)
  }
  res.send('OK')
});

api.use('/api/', router);

export const handler = serverless(api);
