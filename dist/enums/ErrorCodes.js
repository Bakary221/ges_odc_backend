"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCode = exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["USER_NOT_FOUND"] = "Utilisateur introuvable";
    ErrorCodes["USER_ALREADY_EXISTS"] = "Utilisateur d\u00E9j\u00E0 existant";
    ErrorCodes["INVALID_INPUT"] = "Donn\u00E9es invalides";
    ErrorCodes["INTERNAL_ERROR"] = "Erreur interne du serveur";
    // tags
    ErrorCodes["TAG_NOT_FOUND"] = "tag introuvable";
    ErrorCodes["TAG_ALREADY_EXISTS"] = "tag d\u00E9j\u00E0 existant";
    // competences
    ErrorCodes["COMPETENCE_NOT_FOUND"] = "tag introuvable";
    ErrorCodes["COMPETENCE_ALREADY_EXISTS"] = "tag d\u00E9j\u00E0 existant";
    // referentiels
    ErrorCodes["REFERENTIEL_NOT_FOUND"] = "Referentiel introuvable";
    ErrorCodes["REFERENTIEL_ALREADY_EXISTS"] = "Referentiel d\u00E9j\u00E0 existant";
    // profils
    ErrorCodes["PROFILE_NOT_FOUND"] = "Profil introuvable";
    ErrorCodes["PROFILE_ALREADY_EXISTS"] = "Profil d\u00E9j\u00E0 existant";
    // promos
    ErrorCodes["PROMO_NOT_FOUND"] = "Promo introuvable";
    ErrorCodes["PROMO_ALREADY_EXISTS"] = "Promo d\u00E9j\u00E0 existante";
    // niveaux
    ErrorCodes["NIVEAU_NOT_FOUND"] = "Niveau introuvable";
    ErrorCodes["NIVEAU_ALREADY_EXISTS"] = "Niveau d\u00E9j\u00E0 existant";
    // profils de sortie
    ErrorCodes["PROFIL_SORTIE_NOT_FOUND"] = "Profil de sortie introuvable";
    ErrorCodes["PROFIL_SORTIE_ALREADY_EXISTS"] = "Profil de sortie d\u00E9j\u00E0 existant";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["CREATED"] = 201] = "CREATED";
    HttpCode[HttpCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpCode[HttpCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCode[HttpCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCode[HttpCode["CONFLICT"] = 409] = "CONFLICT";
    HttpCode[HttpCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCode || (exports.HttpCode = HttpCode = {}));
//# sourceMappingURL=ErrorCodes.js.map