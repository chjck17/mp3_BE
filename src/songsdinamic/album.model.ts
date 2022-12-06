export interface AlbumModelData {
  id: number;
  name: string;
  description: string;
}
class AlbumModel {
  id: number;
  name: string;
  description: string;
  constructor(albumData: AlbumModelData) {
    this.id = albumData.id;
    this.name = albumData.name;
    this.description = albumData.description;
  }
}

export default AlbumModel;
