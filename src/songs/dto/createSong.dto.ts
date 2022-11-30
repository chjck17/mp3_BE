export class CreateSongDto {
  name: string;
  author: string;
  link:string;
  image:string;
  description:string;
  category:[];
}

export default CreateSongDto;