const Song = require('../../model/document')('song');
const Artist = require('../../model/document')('artist');

module.exports = async (song) => {
  const foundArtist = await Artist.findById(song.artistId);
  if (!foundArtist) return null;

  return Song.create(song);
};