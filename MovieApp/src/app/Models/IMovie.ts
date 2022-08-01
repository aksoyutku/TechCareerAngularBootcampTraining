export interface IMovie {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    isPopular: boolean;
    categoryId: number;
    datePublished: Date;
}