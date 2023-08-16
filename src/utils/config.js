// All hard coded thing will be inside config file

// Google api key
const GOOGLE_API_KEY = "AIzaSyAjUlMQxlLnnf88myUjX1DAdlIG_J7DpTQ";

// Youtube Videos Api
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

// "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
// GOOGLE_API_KEY;

// Youtebe search videos Api
export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?key=" + GOOGLE_API_KEY;
