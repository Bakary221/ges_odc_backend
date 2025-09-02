"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function main() {
    console.log("🚀 Seeding database...");
    // ======================
    // PROFILS
    // ======================
    const profilAdmin = await prisma_1.default.profil.create({
        data: { nomP: "ADMIN" }
    });
    const profilEtudiant = await prisma_1.default.profil.create({
        data: { nomP: "ETUDIANT" }
    });
    // PROFIL SORTI
    const profilSorti = await prisma_1.default.profilSorti.create({
        data: { nom: "Développeur Fullstack" }
    });
    // ======================
    // NIVEAUX & COMPÉTENCES
    // ======================
    const niveau1 = await prisma_1.default.niveaux.create({
        data: { nom: "Débutant" }
    });
    const niveau2 = await prisma_1.default.niveaux.create({
        data: { nom: "Avancé" }
    });
    const competence1 = await prisma_1.default.competence.create({
        data: { description: "Programmation en JavaScript", niveauxId: niveau1.id }
    });
    const competence2 = await prisma_1.default.competence.create({
        data: { description: "Développement API REST", niveauxId: niveau2.id }
    });
    // ======================
    // RÉFÉRENTIELS & PROMOTIONS
    // ======================
    const referentiel = await prisma_1.default.referentiel.create({
        data: { nom: "Développement Web" }
    });
    const promotion = await prisma_1.default.promotion.create({
        data: { nom: "Promo 2025", nbrRef: "3", annee: "2025" }
    });
    await prisma_1.default.refPromo.create({
        data: {
            promotionId: promotion.id,
            referentielId: referentiel.id
        }
    });
    await prisma_1.default.refCompetences.createMany({
        data: [
            { referentielId: referentiel.id, competenceId: competence1.id },
            { referentielId: referentiel.id, competenceId: competence2.id }
        ]
    });
    // ======================
    // TAGS & BRIEFS
    // ======================
    const tag1 = await prisma_1.default.tag.create({ data: { libelle: "JavaScript" } });
    const tag2 = await prisma_1.default.tag.create({ data: { libelle: "API" } });
    const brief = await prisma_1.default.brief.create({
        data: { titre: "Créer une API REST", description: "Projet Node.js" }
    });
    await prisma_1.default.briefCompetence.create({
        data: { briefId: brief.id, competenceId: competence2.id }
    });
    await prisma_1.default.briefTag.createMany({
        data: [
            { briefId: brief.id, tagId: tag1.id },
            { briefId: brief.id, tagId: tag2.id }
        ]
    });
    // ======================
    // GROUPES
    // ======================
    const groupeA = await prisma_1.default.groupe.create({ data: { nom: "Groupe A" } });
    const groupeB = await prisma_1.default.groupe.create({ data: { nom: "Groupe B" } });
    // ======================
    // UTILISATEURS
    // ======================
    const passwordHash = await bcryptjs_1.default.hash("password123", 10);
    const utilisateur1 = await prisma_1.default.utilisateur.create({
        data: {
            nom: "Diop",
            prenom: "Baba",
            email: "baba@example.com",
            adresse: "Dakar",
            photo: null,
            login: "babaDiop",
            password: passwordHash,
            telephone: "770000000",
            genre: "Homme",
            profilId: profilEtudiant.id,
            profilSortiId: profilSorti.id,
            referentielId: referentiel.id,
            competences: {
                create: [
                    { competenceId: competence1.id },
                    { competenceId: competence2.id }
                ]
            },
            groupes: {
                create: [{ groupeId: groupeA.id }]
            }
        }
    });
    const utilisateur2 = await prisma_1.default.utilisateur.create({
        data: {
            nom: "Admin",
            prenom: "Super",
            email: "admin@example.com",
            adresse: "Dakar",
            photo: null,
            login: "admin",
            password: passwordHash,
            telephone: "780000000",
            genre: "Femme",
            profilId: profilAdmin.id,
            referentielId: referentiel.id,
            groupes: {
                create: [{ groupeId: groupeB.id }]
            }
        }
    });
    console.log("✅ Seeding terminé avec succès !");
}
main()
    .catch((e) => {
    console.error("❌ Erreur de seed:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma_1.default.$disconnect();
});
//# sourceMappingURL=seeds.js.map