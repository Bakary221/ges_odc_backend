import express , {Request , Response} from 'express';
import userRoutes from "./routes/UserRoutes";
import tagsRoutes from "./routes/TagRoutes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app = express();

app.use(express.json());

app.get('/' , (req: Request , res: Response) => {
    res.send('API en marche ...');
})

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tags" , tagsRoutes);

// Middleware d'erreur
app.use(ErrorHandler.handle);

export default app;
