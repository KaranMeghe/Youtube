import { v4 as uuidv4 } from "uuid";
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
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Comment Data
export const COMMENT_DATA = [
  {
    id: uuidv4(),
    name: "Karan Verma",
    comment: "Thats Amazing :)",
    replies: [
      {
        id: uuidv4(),
        name: "Aman Khushwala",
        comment: "Yeah, wonderful job",
      },
      {
        id: uuidv4(),
        name: "Khushi Gupta",
        comment: "Superb ❤️",
        replies: [
          {
            id: uuidv4(),
            name: "Radhika Menon",
            comment: "They should visit here.",
            replies: [
              {
                id: uuidv4(),
                name: "Sana dreams",
                comment: "Yeah they should , ohh god please make it happen :)",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Ram Singh",
    comment: "Action he Action :D",
    replies: [
      {
        id: uuidv4(),
        name: "Birju",
        comment: "HahaHa",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Sanika gul",
    comment: "Crazy :P",
    replies: [
      {
        id: uuidv4(),
        name: "Aman Khushwala",
        comment: "Super Crazy Stuff :P",
        replies: [
          {
            id: uuidv4(),
            name: "Nayan Mohankar",
            comment: "Hello Guys!",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Anishka",
        comment: "Have my ❤️",
        replies: [
          {
            id: uuidv4(),
            name: "Radhika Menon",
            comment: "vision.......",
          },
        ],
      },
    ],
  },
];

//Live chat Data
export const LIVECHAT_DATA = [
  {
    id: uuidv4(),
    name: "Karan Meghe",
    message: "Destroyer Beerus Is Coming",
  },

  {
    id: uuidv4(),
    name: "Ashishnx",
    message: "He is wake up lol",
  },

  {
    id: uuidv4(),
    name: "Random",
    message: "Lol he did it",
  },

  {
    id: uuidv4(),
    name: "Greek Sou",
    message: "Not Now",
  },

  {
    id: uuidv4(),
    name: "Redux",
    message: "Toolkits sucks",
  },

  {
    id: uuidv4(),
    name: "Freedom",
    message: "Freedom_900 subscribe please",
  },

  {
    id: uuidv4(),
    name: "King34",
    message: "slaying",
  },
];
