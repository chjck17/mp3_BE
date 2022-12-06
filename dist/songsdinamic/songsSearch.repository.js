"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_service_1 = require("../databasedinamic/database.service");
const album_model_1 = require("./album.model");
const song_model_1 = require("./song.model");
let SongsSearchRepository = class SongsSearchRepository {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async search(searchQuery) {
        var _a, _b;
        const databaseResponse = await this.databaseService.runQuery(`
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
    `, [searchQuery]);
        const databaseResponseAlbum = await this.databaseService.runQuery(`
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
    `, [searchQuery]);
        const itemsSong = databaseResponse.rows.map((databaseRow) => new song_model_1.default(databaseRow));
        const itemsAlbum = databaseResponseAlbum.rows.map((databaseRow) => new album_model_1.default(databaseRow));
        const countSong = ((_a = databaseResponse.rows[0]) === null || _a === void 0 ? void 0 : _a.total_songs_count) || 0;
        const countAlbum = ((_b = databaseResponse.rows[0]) === null || _b === void 0 ? void 0 : _b.total_albums_count) || 0;
        return {
            itemsSong, countSong, itemsAlbum, countAlbum
        };
    }
};
SongsSearchRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.default])
], SongsSearchRepository);
exports.default = SongsSearchRepository;
//# sourceMappingURL=songsSearch.repository.js.map