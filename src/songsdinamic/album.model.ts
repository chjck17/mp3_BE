export interface AlbumModelData {
  id: number;
  name: string;
  description: string;
  image: string;
}
class AlbumModel {
  id: number;
  name: string;
  description: string;
  image: string;
  constructor(albumData: AlbumModelData) {
    this.id = albumData.id;
    this.name = albumData.name;
    this.description = albumData.description;
    this.image = albumData.image;
  }
}

export default AlbumModel;
