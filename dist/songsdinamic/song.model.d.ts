export interface SongModelData {
    id: number;
    name: string;
    author: string;
    description: string;
}
declare class SongModel {
    id: number;
    name: string;
    author: string;
    description: string;
    constructor(songData: SongModelData);
}
export default SongModel;
