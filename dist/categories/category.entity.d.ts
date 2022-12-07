import Song from 'src/songs/song.entity';
declare class Category {
    id?: string;
    name: string;
    image: string;
    description: string;
    songs: Song[];
}
export default Category;
