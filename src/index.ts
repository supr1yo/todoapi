import express, { Request, Response } from 'express';
const app = express();
const PORT: number = 8080;



app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World!'
    });
});


app.listen(PORT, () => {
    console.log(`- Running on http://127.0.0.1:${PORT}`);
});

