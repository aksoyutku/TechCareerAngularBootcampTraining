export interface IMovie {
    id?: number;
    title: string;
    description: string;
    imageUrl: string;
    categoryId: number;
    isPopular: boolean;
    datePublished: number;
}