import { UserInput } from "../models/UserModel";
export declare class UserService {
    static create(data: UserInput): Promise<{
        nom: string;
        prenom: string;
        adresse: string | null;
        photo: string | null;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        genre: string;
        profilId: number | null;
        profilSortiId: number | null;
        referentielId: number | null;
        id: number;
    }>;
    static findAll(): Promise<{
        nom: string;
        prenom: string;
        adresse: string | null;
        photo: string | null;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        genre: string;
        profilId: number | null;
        profilSortiId: number | null;
        referentielId: number | null;
        id: number;
    }[]>;
    static findById(id: number): Promise<{
        nom: string;
        prenom: string;
        adresse: string | null;
        photo: string | null;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        genre: string;
        profilId: number | null;
        profilSortiId: number | null;
        referentielId: number | null;
        id: number;
    }>;
    static update(id: number, data: Partial<UserInput>): Promise<{
        nom: string;
        prenom: string;
        adresse: string | null;
        photo: string | null;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        genre: string;
        profilId: number | null;
        profilSortiId: number | null;
        referentielId: number | null;
        id: number;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        prenom: string;
        adresse: string | null;
        photo: string | null;
        email: string;
        login: string;
        password: string;
        telephone: string | null;
        genre: string;
        profilId: number | null;
        profilSortiId: number | null;
        referentielId: number | null;
        id: number;
    }>;
}
//# sourceMappingURL=UserService.d.ts.map