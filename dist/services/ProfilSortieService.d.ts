import { ProfilSortieInput } from "../models/ProfilSortieModel";
export declare class ProfilSortieService {
    static create(data: ProfilSortieInput): Promise<{
        nom: string;
        id: number;
    }>;
    static findAll(): Promise<{
        nom: string;
        id: number;
    }[]>;
    static findById(id: number): Promise<{
        nom: string;
        id: number;
    }>;
    static update(id: number, data: Partial<ProfilSortieInput>): Promise<{
        nom: string;
        id: number;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        id: number;
    }>;
}
//# sourceMappingURL=ProfilSortieService.d.ts.map