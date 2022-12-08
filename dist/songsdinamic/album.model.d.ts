export interface AlbumModelData {
    id: number;
    name: string;
    description: string;
    image: string;
}
declare class AlbumModel {
    id: number;
    name: string;
    description: string;
    image: string;
    constructor(albumData: AlbumModelData);
}
export default AlbumModel;
