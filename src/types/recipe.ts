
import type { CategorySlug, ImageAsset } from './category';

export const REGIONS = [
  'Sonora',
  'Chihuahua',
  'Coahuila',
  'Nuevo León',
  'Tamaulipas',
] as const;
export type Region = (typeof REGIONS)[number];

export const DIFFICULTIES = ['facil', 'media', 'dificil'] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];
export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  facil: 'Fácil',
  media: 'Media',
  dificil: 'Difícil',
};

export const SPICE_LEVELS = ['ninguno', 'suave', 'medio', 'alto'] as const;
export type SpiceLevel = (typeof SPICE_LEVELS)[number];
export const SPICE_LEVEL_LABELS: Record<SpiceLevel, string> = {
  ninguno: 'Sin picor',
  suave: 'Suave',
  medio: 'Medio',
  alto: 'Alto',
};

export const INGREDIENT_UNITS = [
  'g',
  'kg',
  'ml',
  'l',
  'pza',
  'cdta',
  'cda',
  'taza',
  'pizca',
] as const;
export type IngredientUnit = (typeof INGREDIENT_UNITS)[number];

export interface Ingredient {
  id: string;
  name: string;
  quantity?: number;
  unit?: IngredientUnit;
  note?: string;
}

export interface Utensil {
  id: string;
  name: string;
}

export interface PreparationStep {
  order: number;
  title: string;
  description: string;
  durationMinutes?: number;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
  category: CategorySlug;
  region: Region;
  prepTimeMinutes: number;
  difficulty: Difficulty;
  spiceLevel: SpiceLevel;
  tags: string[];
  featured?: boolean;
  servings?: number;
  ingredients?: Ingredient[];
  utensils?: Utensil[];
  preparationSteps?: PreparationStep[];
  chefTip?: string;
  pairingSlugs?: string[];
}

export type DetailedRecipe = Recipe &
  Required<
    Pick<Recipe, 'servings' | 'ingredients' | 'utensils' | 'preparationSteps'>
  >;