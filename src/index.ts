import express, { Request, Response } from "express";
import User from "./models/User";
import sequelize from "./database/database";
import router from "./routes/";
import { Tspec, TspecDocsMiddleware } from "tspec";

const app = express();
const PORT: number = 8080;

// Sync models with database
sequelize.sync();

app.get("/", async (req: Request, res: Response) => {
  const allUser = await User.findAll();
  console.log(allUser);
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// Login route - params: username & password
app.use("/v1/api", router);


const options: Tspec.GenerateParams = {
    // specPathGlobs: ['src/**/*.ts'],
    // tsconfigPath: './tsconfig.json',
    // outputPath: './generate/openapi.json',
    // specVersion: 3,
    openapi: {
      title: 'TODO API',
      version: '0.0.1',
      description: "API for To-Do applications",
      "servers": [
            {
                "url": "/v1/api"
            }
        ],
    },
    debug: false,
    ignoreErrors: true,
  };

const initServer = async () => {
  app.use("/docs", await TspecDocsMiddleware(options));
  app.listen(PORT, () => {
    console.log(`- Running on http://127.0.0.1:${PORT}`);
  });
};
initServer();
