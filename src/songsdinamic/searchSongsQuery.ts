import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
 
class SearchSongsQuery {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  search: string;
}
 
export default SearchSongsQuery;