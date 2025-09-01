export enum ErrorCodes {
    USER_NOT_FOUND = "Utilisateur introuvable",
    USER_ALREADY_EXISTS = "Utilisateur déjà existant",
    INVALID_INPUT = "Données invalides",
    INTERNAL_ERROR = "Erreur interne du serveur",


    // tags
    TAG_NOT_FOUND = "tag introuvable",
    TAG_ALREADY_EXISTS = "tag déjà existant",
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