import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/databasedinamic/database.service';
import AlbumModel from './album.model';

import SongModel from './song.model';
@Injectable()
class SongsSearchRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async search(
    searchQuery: string,
  ) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      WITH selected_songs AS (
        SELECT * FROM song
        WHERE (name ILIKE concat('%', $1::text, '%') OR description ILIKE concat('%', $1::text, '%')OR author ILIKE concat('%', $1::text, '%'))
        ORDER BY id ASC 
      ),
      
      total_songs_count_response AS (
        SELECT COUNT(*)::int AS total_songs_count FROM song
        WHERE name ILIKE concat('%', $1::text, '%') OR description ILIKE concat('%', $1::text, '%')OR author ILIKE concat('%', $1::text, '%')
      )
      SELECT * FROM selected_songs, total_songs_count_response
    `,
      [searchQuery],
    );

    const databaseResponseAlbum = await this.databaseService.runQuery(
      `
      WITH selected_albums AS (
        SELECT * FROM album
        WHERE (name ILIKE concat('%', $1::text, '%') OR description ILIKE concat('%', $1::text, '%'))
        ORDER BY id ASC 
      ),
      
      total_albums_count_response AS (
        SELECT COUNT(*)::int AS total_albums_count FROM album
        WHERE name ILIKE concat('%', $1::text, '%') OR description ILIKE concat('%', $1::text, '%')
      )
      SELECT * FROM selected_albums, total_albums_count_response
    `,
      [searchQuery],
    );
    const itemsSong = databaseResponse.rows.map(
      (databaseRow) => new SongModel(databaseRow),
    );
     const itemsAlbum = databaseResponseAlbum.rows.map(
      (databaseRow) => new AlbumModel(databaseRow),
    );
    const countSong = databaseResponse.rows[0]?.total_songs_count || 0;
    const countAlbum = databaseResponse.rows[0]?.total_albums_count || 0;
    return {
      itemsSong,countSong, itemsAlbum,countAlbum
      
    };
  }
}

export default SongsSearchRepository;
