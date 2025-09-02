import { ProfileInput } from "../models/ProfileModel";
export declare class ProfileService {
    static create(data: ProfileInput): Promise<{
        id: number;
        nomP: string;
    }>;
    static findAll(): Promise<{
        id: number;
        nomP: string;
    }[]>;
    static findById(id: number): Promise<{
        id: number;
        nomP: string;
    }>;
    static update(id: number, data: Partial<ProfileInput>): Promise<{
        id: number;
        nomP: string;
    }>;
    static delete(id: number): Promise<{
        id: number;
        nomP: string;
    }>;
}
//# sourceMappingURL=ProfileService.d.ts.map