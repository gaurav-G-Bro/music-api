import Router from "express";
import {
  addSongToPlaylist,
  getPlaylistSongs,
  removePlaylistSong,
} from "../controllers/playlist_song.controller.js";

const router = Router();

router.route("/:playlistId/songs").post(addSongToPlaylist);
router.route("/:playlistId/songs").get(getPlaylistSongs);
router.route("/:playlistId/songs/:songId").delete(removePlaylistSong);

export default router;
