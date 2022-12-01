import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/databasedinamic/database.service';

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
    const items = databaseResponse.rows.map(
      (databaseRow) => new SongModel(databaseRow),
    );
    const count = databaseResponse.rows[0]?.total_songs_count || 0;
    return {
      items,count
      //databaseResponse
    };
  }
}

export default SongsSearchRepository;
