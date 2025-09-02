import { z } from "zod";

export const ProfileSchema = z.object({
  nomP: z.string().min(1),
});

export type ProfileInput = z.infer<typeof ProfileSchema>;
