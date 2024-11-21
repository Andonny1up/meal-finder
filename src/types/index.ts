export type Category = {
    strCategory: string
}

export type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export type SearchForm = {
    search: string;
}

// atajo tipado objeto dinamico esto no es bueno en produccion
// pero se utilizara con fines educativos
export type MealDetails = {
    [key: string]: string;
}