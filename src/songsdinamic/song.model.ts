export interface SongModelData {
  id: number;
  name: string;
  author: string;
  description: string;
  link: string;
  image: string;
}
class SongModel {
  id: number;
  name: string;
  author: string;
  description: string;
  link: string;
  image: string;
  constructor(songData: SongModelData) {
    this.id = songData.id;
    this.name = songData.name;
    this.author = songData.author;
    this.description = songData.description;
    this.link = songData.link;
    this.image = songData.image;
  }
}

export default SongModel;
