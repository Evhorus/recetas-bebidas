import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipesSliceType, createRecipeSlice } from "./recipeSlice";
import { createFavoritesSlice, favoritesSliceType } from "./favoritesSlice";
import {
  NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";

export const useAppStore = create<
  RecipesSliceType & favoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
