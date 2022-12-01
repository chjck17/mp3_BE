export interface SongModelData {
  id: number;
  name: string;
  author: string;
  description: string;
}
class SongModel {
  id: number;
  name: string;
  author: string;
  description: string;
  constructor(songData: SongModelData) {
    this.id = songData.id;
    this.name = songData.name;
    this.author = songData.author;
    this.description = songData.description;
  }
}

export default SongModel;
