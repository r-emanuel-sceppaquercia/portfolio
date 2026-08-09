import nighttimeStroll from "@assets/music/Nighttime-Stroll.mp3";
import herbalTea from "@assets/music/herbal-tea.mp3";
import almostThere from "@assets/music/almost-there.mp3";

export interface MusicTrack {
  title: string;
  artist: string;
  src: string;
  link: string;
}

export const musicPlaylist: MusicTrack[] = [
  {
    title: "Nighttime Stroll",
    artist: "Artificial.Music",
    src: nighttimeStroll,
    link: "https://breakingcopyright.com/es/song/artificialmusic-nighttime-stroll",
  },
  {
    title: "Herbal Tea",
    artist: "Artificial.Music",
    src: herbalTea,
    link: "https://breakingcopyright.com/es/song/artificialmusic-herbal-tea",
  },
  {
    title: "Almost there",
    artist: "Artificial.Music",
    src: almostThere,
    link: "https://breakingcopyright.com/es/song/artificialmusic-almost-there",
  },
];
