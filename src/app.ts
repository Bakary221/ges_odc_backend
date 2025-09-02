import express , {Request , Response} from 'express';
import userRoutes from "./routes/UserRoutes";
import tagsRoutes from "./routes/TagRoutes";
import competencesRoutes from "./routes/CompetenceRoutes";
import referentielRoutes from "./routes/ReferentielRoutes";
import profileRoutes from "./routes/ProfileRoutes";
import promoRoutes from "./routes/PromoRoutes";
import niveauxRoutes from "./routes/NiveauxRoutes";
import profilSortieRoutes from "./routes/ProfilSortieRoutes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app = express();

app.use(express.json());

app.get('/' , (req: Request , res: Response) => {
    res.send('API en marche ...');
})

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tags" , tagsRoutes);
app.use("/api/competences" , competencesRoutes);
app.use("/api/referentiels" , referentielRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/promos', promoRoutes); 
app.use("/api/niveaux", niveauxRoutes);
app.use("/api/profils-sortie", profilSortieRoutes);

// Middleware d'erreur
app.use(ErrorHandler.handle);

export default app;
