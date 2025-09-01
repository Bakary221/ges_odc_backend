import { TagsInput } from "../models/TagsModel";
export declare class TagService {
    static create(data: TagsInput): Promise<{
        id: number;
        libelle: string;
    }>;
    static findAll(): Promise<{
        id: number;
        libelle: string;
    }[]>;
    static findById(id: number): Promise<{
        id: number;
        libelle: string;
    }>;
    static update(id: number, data: Partial<TagsInput>): Promise<{
        id: number;
        libelle: string;
    }>;
    static delete(id: number): Promise<{
        id: number;
        libelle: string;
    }>;
}
//# sourceMappingURL=TagService.d.ts.map