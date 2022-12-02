import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import SongsSearchRepository from './songsSearch.repository';
@Injectable()
export default class SongsService {
  constructor(
     private songsSearchRepository: SongsSearchRepository,
  ) {}
    getSongs(searchQuery?: string,) 
    {
      return this.songsSearchRepository.search(
        searchQuery,
      );
  }


}
