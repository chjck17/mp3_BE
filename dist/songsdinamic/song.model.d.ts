export interface SongModelData {
    id: number;
    name: string;
    author: string;
    description: string;
    link: string;
    image: string;
}
declare class SongModel {
    id: number;
    name: string;
    author: string;
    description: string;
    link: string;
    image: string;
    constructor(songData: SongModelData);
}
export default SongModel;
