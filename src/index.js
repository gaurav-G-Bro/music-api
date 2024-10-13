import { app } from "./app.js";
import Router from "express";
import { CONNECT_DB } from "./db/mongo.connection.js";

const router = Router();
const PORT = process.env.PORT || 3000;
CONNECT_DB();

// Imports are here
import userRoute from "./routes/user.route.js";
import songRoute from "./routes/song.route.js";
import artistRoute from "./routes/artist.route.js";
import curatedPlaylistRoute from "./routes/curated_playlist.route.js";
import newReleaseRoute from "./routes/new_release.route.js";
import notificationRoute from "./routes/notification.route.js";
import playlistSongRoute from "./routes/playlist_song.route.js";
import playlistRoute from "./routes/playlist.route.js";
import sharedSongRoute from "./routes/shared_song.route.js";
import songRecommendationRoute from "./routes/song_recommendation.route.js";
import userFollowingRoute from "./routes/user_following_artist.route.js";

//routes declaration are here
app.use("api/v1/users", userRoute);
app.use("api/v1/songs", songRoute);
app.use("api/v1/artists", artistRoute);
app.use("api/v1/curated-playlists", curatedPlaylistRoute);
app.use("api/v1/new-releases", newReleaseRoute);
app.use("api/v1/notifications", notificationRoute);
app.use("api/v1/playlist-songs", playlistSongRoute);
app.use("api/v1/playlists", playlistRoute);
app.use("api/v1/shared-songs", sharedSongRoute);
app.use("api/v1/song-recommendations", songRecommendationRoute);
app.use("api/v1/user-followings", userFollowingRoute);

router.listen(PORT, (err) => {
  console.log(`server is running on port ${PORT}`);
});

export default router;
