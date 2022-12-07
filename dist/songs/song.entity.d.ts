import Category from 'src/categories/category.entity';
declare class Song {
    id?: string;
    name: string;
    author: string;
    link: string;
    image: string;
    description: string;
    categories: Category[];
}
export default Song;
