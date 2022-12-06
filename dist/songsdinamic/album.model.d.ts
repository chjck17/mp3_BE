export interface AlbumModelData {
    id: number;
    name: string;
    description: string;
}
declare class AlbumModel {
    id: number;
    name: string;
    description: string;
    constructor(albumData: AlbumModelData);
}
export default AlbumModel;
