import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Hello CI'));
app.get('/health', (req, res) => res.status(200).json({ ok: true }));
export default app;
