"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SongModel {
    constructor(songData) {
        this.id = songData.id;
        this.name = songData.name;
        this.author = songData.author;
        this.description = songData.description;
        this.link = songData.link;
        this.image = songData.image;
    }
}
exports.default = SongModel;
//# sourceMappingURL=song.model.js.map