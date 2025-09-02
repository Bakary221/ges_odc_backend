import { NiveauxInput } from "../models/NiveauxModel";
export declare class NiveauxService {
    static create(data: NiveauxInput): Promise<{
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
    static update(id: number, data: Partial<NiveauxInput>): Promise<{
        nom: string;
        id: number;
    }>;
    static delete(id: number): Promise<{
        nom: string;
        id: number;
    }>;
}
//# sourceMappingURL=NiveauxService.d.ts.map