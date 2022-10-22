export class AddSongDto {
  // tên play list
  public id: number;
  // trạng thái công khai hay không
  public author: string;
  public link : string;
  public name: string ;
  // trạng thái phát ngẫu nhiên
  //public random_play:boolean;
}

export default AddSongDto;