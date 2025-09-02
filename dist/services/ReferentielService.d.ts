import { ReferentielsInput } from "../models/ReferentielModel";
export declare class ReferentielService {
    static create(data: ReferentielsInput): Promise<{
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
    static update(id: number, data: Partial<ReferentielsInput>): Promise<{
        nom: string;
        id: number;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        id: number;
    }>;
}
//# sourceMappingURL=ReferentielService.d.ts.map