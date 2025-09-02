# GES ODC Backend

API Backend pour le système de gestion des écoles ODC (Orange Digital Center).

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [API Endpoints](#api-endpoints)
- [Structure du projet](#structure-du-projet)
- [Base de données](#base-de-données)
- [Scripts disponibles](#scripts-disponibles)
- [Contribution](#contribution)

## ✨ Fonctionnalités

- Gestion complète des utilisateurs (CRUD)
- Gestion des profils et profils de sortie
- Gestion des promotions et niveaux
- Gestion des compétences et référentiels
- Gestion des tags
- Authentification et autorisation
- Validation des données avec Zod
- Gestion centralisée des erreurs
- API REST avec Express.js
- Base de données avec Prisma ORM

## 🛠 Technologies utilisées

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Typage statique
- **Prisma** - ORM et gestion de base de données
- **MySQL** - Base de données
- **Zod** - Validation des schémas
- **bcryptjs** - Hachage des mots de passe

## 📋 Prérequis

- Node.js (version 18 ou plus récente)
- npm ou yarn
- MySQL (version 8.0 ou plus récente)
- Git

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Bakary221/ges_odc_backend.git
   cd ges_odc_backend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.exemple .env
   ```
   Puis modifiez le fichier `.env` avec vos paramètres.

4. **Configurer la base de données**
   ```bash
   # Générer le client Prisma
   npx prisma generate
   
   # Appliquer les migrations
   npm run prisma:migrate
   
   # (Optionnel) Peupler la base avec des données de test
   npm run prisma:seed
   ```

## ⚙️ Configuration

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
DATABASE_URL="mysql://username:password@localhost:3306/ges_odc_db"
PORT=3000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_here
CORS_ORIGIN=http://localhost:3000,http://localhost:8080
BCRYPT_SALT_ROUNDS=10
```

## 🎯 Utilisation

### Développement
```bash
npm run dev
```
Le serveur démarre sur `http://localhost:3000`

### Production
```bash
npm run build
npm start
```

## 📚 API Endpoints

### Utilisateurs
- `GET /api/users` - Récupérer tous les utilisateurs
- `POST /api/users` - Créer un utilisateur
- `GET /api/users/:id` - Récupérer un utilisateur par ID
- `PUT /api/users/:id` - Mettre à jour un utilisateur
- `DELETE /api/users/:id` - Supprimer un utilisateur

### Profils
- `GET /api/profiles` - Récupérer tous les profils
- `POST /api/profiles` - Créer un profil
- `GET /api/profiles/:id` - Récupérer un profil par ID
- `PUT /api/profiles/:id` - Mettre à jour un profil
- `DELETE /api/profiles/:id` - Supprimer un profil

### Promotions
- `GET /api/promos` - Récupérer toutes les promotions
- `POST /api/promos` - Créer une promotion
- `GET /api/promos/:id` - Récupérer une promotion par ID
- `PUT /api/promos/:id` - Mettre à jour une promotion
- `DELETE /api/promos/:id` - Supprimer une promotion

### Niveaux
- `GET /api/niveaux` - Récupérer tous les niveaux
- `POST /api/niveaux` - Créer un niveau
- `GET /api/niveaux/:id` - Récupérer un niveau par ID
- `PUT /api/niveaux/:id` - Mettre à jour un niveau
- `DELETE /api/niveaux/:id` - Supprimer un niveau

### Compétences
- `GET /api/competences` - Récupérer toutes les compétences
- `POST /api/competences` - Créer une compétence
- `GET /api/competences/:id` - Récupérer une compétence par ID
- `PUT /api/competences/:id` - Mettre à jour une compétence
- `DELETE /api/competences/:id` - Supprimer une compétence

### Référentiels
- `GET /api/referentiels` - Récupérer tous les référentiels
- `POST /api/referentiels` - Créer un référentiel
- `GET /api/referentiels/:id` - Récupérer un référentiel par ID
- `PUT /api/referentiels/:id` - Mettre à jour un référentiel
- `DELETE /api/referentiels/:id` - Supprimer un référentiel

### Profils de sortie
- `GET /api/profils-sortie` - Récupérer tous les profils de sortie
- `POST /api/profils-sortie` - Créer un profil de sortie
- `GET /api/profils-sortie/:id` - Récupérer un profil de sortie par ID
- `PUT /api/profils-sortie/:id` - Mettre à jour un profil de sortie
- `DELETE /api/profils-sortie/:id` - Supprimer un profil de sortie

### Tags
- `GET /api/tags` - Récupérer tous les tags
- `POST /api/tags` - Créer un tag
- `GET /api/tags/:id` - Récupérer un tag par ID
- `PUT /api/tags/:id` - Mettre à jour un tag
- `DELETE /api/tags/:id` - Supprimer un tag

## 📁 Structure du projet

```
src/
├── config/           # Configuration (Prisma, base de données)
├── controllers/      # Contrôleurs (logique métier)
├── enums/           # Énumérations (codes d'erreur, codes de succès)
├── middlewares/     # Middlewares (gestion erreurs, formatage réponses)
├── models/          # Modèles et schémas de validation (Zod)
├── routes/          # Définition des routes
├── services/        # Services (logique d'accès aux données)
├── seeders/         # Scripts de peuplement de la base
├── app.ts           # Configuration Express
└── server.ts        # Point d'entrée de l'application

prisma/
├── schema.prisma    # Schéma de la base de données
└── migrations/      # Migrations de la base de données
```

## 🗄️ Base de données

Le projet utilise **MySQL** avec **Prisma** comme ORM. Le schéma de base de données comprend :

- **Utilisateurs** (Utilisateur)
- **Profils** (Profil)
- **Profils de sortie** (ProfilSorti)
- **Promotions** (Promotion)
- **Niveaux** (Niveaux)
- **Compétences** (Competence)
- **Référentiels** (Referentiel)
- **Tags** (Tag)
- **Groupes** (Groupe)
- **Briefs** (Brief)
- **Tables de liaison** pour les relations many-to-many

### Migrations

```bash
# Créer une nouvelle migration
npx prisma migrate dev --name nom_de_la_migration

# Appliquer les migrations en production
npx prisma migrate deploy

# Régénérer le client Prisma
npx prisma generate
```

## 📜 Scripts disponibles

- `npm run dev` - Démarre le serveur en mode développement avec hot-reload
- `npm run build` - Compile le TypeScript en JavaScript
- `npm start` - Démarre le serveur en production
- `npm run prisma:migrate` - Applique les migrations de base de données
- `npm run prisma:seed` - Peuple la base de données avec des données de test

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence ISC.

## 👥 Auteur

**Bakary221** - [GitHub](https://github.com/Bakary221)

---

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.
