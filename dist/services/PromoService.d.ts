import { PromoInput } from "../models/PromoModel";
export declare class PromoService {
    static create(data: PromoInput): Promise<{
        nom: string;
        id: number;
        nbrRef: string;
        annee: string;
    }>;
    static findAll(): Promise<{
        nom: string;
        id: number;
        nbrRef: string;
        annee: string;
    }[]>;
    static findById(id: number): Promise<{
        nom: string;
        id: number;
        nbrRef: string;
        annee: string;
    }>;
    static update(id: number, data: Partial<PromoInput>): Promise<{
        nom: string;
        id: number;
        nbrRef: string;
        annee: string;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        id: number;
        nbrRef: string;
        annee: string;
    }>;
}
//# sourceMappingURL=PromoService.d.ts.map