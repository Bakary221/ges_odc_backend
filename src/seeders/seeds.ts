import prisma from "../config/prisma";
import bcrypt from "bcryptjs";

async function main() {
  console.log("🚀 Seeding database...");

  // ======================
  // PROFILS
  // ======================
  const profilAdmin = await prisma.profil.create({
    data: { nomP: "ADMIN" }
  });

  const profilEtudiant = await prisma.profil.create({
    data: { nomP: "ETUDIANT" }
  });

  // PROFIL SORTI
  const profilSorti = await prisma.profilSorti.create({
    data: { nom: "Développeur Fullstack" }
  });

  // ======================
  // NIVEAUX & COMPÉTENCES
  // ======================
  const niveau1 = await prisma.niveaux.create({
    data: { nom: "Débutant" }
  });

  const niveau2 = await prisma.niveaux.create({
    data: { nom: "Avancé" }
  });

  const competence1 = await prisma.competence.create({
    data: { description: "Programmation en JavaScript", niveauxId: niveau1.id }
  });

  const competence2 = await prisma.competence.create({
    data: { description: "Développement API REST", niveauxId: niveau2.id }
  });

  // ======================
  // RÉFÉRENTIELS & PROMOTIONS
  // ======================
  const referentiel = await prisma.referentiel.create({
    data: { nom: "Développement Web" }
  });

  const promotion = await prisma.promotion.create({
    data: { nom: "Promo 2025", nbrRef: "3", annee: "2025" }
  });

  await prisma.refPromo.create({
    data: {
      promotionId: promotion.id,
      referentielId: referentiel.id
    }
  });

  await prisma.refCompetences.createMany({
    data: [
      { referentielId: referentiel.id, competenceId: competence1.id },
      { referentielId: referentiel.id, competenceId: competence2.id }
    ]
  });

  // ======================
  // TAGS & BRIEFS
  // ======================
  const tag1 = await prisma.tag.create({ data: { libelle: "JavaScript" } });
  const tag2 = await prisma.tag.create({ data: { libelle: "API" } });

  const brief = await prisma.brief.create({
    data: { titre: "Créer une API REST", description: "Projet Node.js" }
  });

  await prisma.briefCompetence.create({
    data: { briefId: brief.id, competenceId: competence2.id }
  });

  await prisma.briefTag.createMany({
    data: [
      { briefId: brief.id, tagId: tag1.id },
      { briefId: brief.id, tagId: tag2.id }
    ]
  });

  // ======================
  // GROUPES
  // ======================
  const groupeA = await prisma.groupe.create({ data: { nom: "Groupe A" } });
  const groupeB = await prisma.groupe.create({ data: { nom: "Groupe B" } });

  // ======================
  // UTILISATEURS
  // ======================
  const passwordHash = await bcrypt.hash("password123", 10);

  const utilisateur1 = await prisma.utilisateur.create({
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

  const utilisateur2 = await prisma.utilisateur.create({
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
    await prisma.$disconnect();
  });
