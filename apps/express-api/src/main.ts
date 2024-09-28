/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api!' });
});

app.get('/sse-endpoint',(req,res)=>{
  res.setHeader('Content-Type','text/event-stream');
  res.setHeader('Cache-Control','no-cache');
  res.setHeader('Connection','keep-alive');
  res.flushHeaders(); // flush the headers to establish SSE connection

  // Send a message every second
  let counter = 0;
  const intervalId = setInterval(()=>{
    res.write(`data: Message ${counter++}\n\n`)
  },1000);

  // Clean up the interval when the connection is closed
  req.on('close',()=>{
    clearInterval(intervalId);
    res.end();
  });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
