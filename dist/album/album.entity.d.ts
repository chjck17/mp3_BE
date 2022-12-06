import Song from 'src/songs/song.entity';
declare class Album {
    id?: string;
    name: string;
    state: boolean;
    listSong: Song[];
    description: string;
    image: string;
}
export default Album;
