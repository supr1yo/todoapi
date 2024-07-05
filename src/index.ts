import express, { Request, Response } from 'express';
import  User  from './models/User';
import sequelize from './database/database';
import login from './router/login';

const app = express();
const PORT: number = 8080;


// Sync models with database
sequelize.sync();



app.get('/', async (req: Request, res: Response) => {
    const allUser = User.findAll();
    console.log(allUser);
});

app.use(express.json());

// Login route - params: username & password
app.use('/login', login);

app.listen(PORT, () => {
    console.log(`- Running on http://127.0.0.1:${PORT}`);
});

