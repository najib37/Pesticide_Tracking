
import { MarkerType } from './MarkerType';

export type PestType = Omit<MarkerType, "id" | "created_at" | "updated_at" | "lng" | "lat">;

export type FeildType = PestType;
