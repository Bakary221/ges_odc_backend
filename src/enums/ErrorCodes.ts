export enum ErrorCodes {
    USER_NOT_FOUND = "Utilisateur introuvable",
    USER_ALREADY_EXISTS = "Utilisateur déjà existant",
    INVALID_INPUT = "Données invalides",
    INTERNAL_ERROR = "Erreur interne du serveur",


    // tags
    TAG_NOT_FOUND = "tag introuvable",
    TAG_ALREADY_EXISTS = "tag déjà existant",

    // competences
    COMPETENCE_NOT_FOUND = "tag introuvable",
    COMPETENCE_ALREADY_EXISTS = "tag déjà existant",

    // referentiels
    REFERENTIEL_NOT_FOUND = "Referentiel introuvable",
    REFERENTIEL_ALREADY_EXISTS = "Referentiel déjà existant",

    // profils
    PROFILE_NOT_FOUND = "Profil introuvable",
    PROFILE_ALREADY_EXISTS = "Profil déjà existant",

    // promos
    PROMO_NOT_FOUND = "Promo introuvable",
    PROMO_ALREADY_EXISTS = "Promo déjà existante",

    // niveaux
    NIVEAU_NOT_FOUND = "Niveau introuvable",
    NIVEAU_ALREADY_EXISTS = "Niveau déjà existant",

    // profils de sortie
    PROFIL_SORTIE_NOT_FOUND = "Profil de sortie introuvable",
    PROFIL_SORTIE_ALREADY_EXISTS = "Profil de sortie déjà existant",
}


export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500
}