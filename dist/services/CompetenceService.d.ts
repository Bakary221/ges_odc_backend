import { CompetencesInput } from "../models/CompetencesModel";
export declare class CompetenceService {
    static create(data: CompetencesInput): Promise<{
        id: number;
        description: string;
        niveauxId: number | null;
    }>;
    static findAll(): Promise<{
        id: number;
        description: string;
        niveauxId: number | null;
    }[]>;
    static findById(id: number): Promise<{
        id: number;
        description: string;
        niveauxId: number | null;
    }>;
    static update(id: number, data: Partial<CompetencesInput>): Promise<{
        id: number;
        description: string;
        niveauxId: number | null;
    }>;
    static delete(id: number): Promise<{
        id: number;
        description: string;
        niveauxId: number | null;
    }>;
}
//# sourceMappingURL=CompetenceService.d.ts.map