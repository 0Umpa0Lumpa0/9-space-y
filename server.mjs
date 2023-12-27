import https from "https";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import SendToMars from "./sendToMars.mjs";
import fetch from "node-fetch";

const rootDir = process.cwd();
@@ -60,8 +61,13 @@ app.get('/api/logout', (req, res) => {
  res.end()
})

app.post('/api/user/sendToMars/send',(req,res)=> SendToMars.send(req,res));
app.post('/api/user/sendToMars/cancel',(req,res)=> SendToMars.cancel(req,res));
app.get('/api/user/sendToMars/get',(req,res)=> SendToMars.get(req,res));

app.get('/login', (_, res) => { res.sendFile(path.join(rootDir, 'spa/build/index.html')); })

app.use('/*', redirected);
app.get('/*', (_, res) => { res.sendFile(path.join(rootDir, 'spa/build/index.html')); })
