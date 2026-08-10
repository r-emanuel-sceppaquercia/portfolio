import { useEffect, useRef, useState } from "react";
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Stack,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { AppCard, AppTypography } from "../common";
import musicArtwork from "@/assets/music/3am_lofi.gif";
import { musicPlaylist } from "@/constants/MusicData";
import { formatTime } from "@/utils/timeFormatter";

export default function MusicPlayerCard() {
  const [currentTrack, setCurrentTrack] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.15);

  const currentTrackData = musicPlaylist[currentTrack];

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    setCurrentTime(0);
    setDuration(0);

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    if (currentTime === duration) {
      nextTrack();
    }
  }, [currentTime]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const previousTrack = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? musicPlaylist.length - 1 : prev - 1,
    );

    setCurrentTime(0);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) =>
      prev === musicPlaylist.length - 1 ? 0 : prev + 1,
    );

    setCurrentTime(0);
  };

  return (
    <AppCard
      sx={{
        width: 305,
        maxWidth: 350,
        mx: "auto",
        overflow: "hidden",
        border: 1,
        borderColor: "primary.main",
        boxShadow: "0 10px 35px rgba(0, 0, 0, 0.45)",
        transition: "box-shadow .25s ease, border-color .25s ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 0 20px rgba(101, 78, 104, 0.35)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={musicArtwork}
          alt="Lo-fi artwork"
        />

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 8,
            right: 8,
          }}
        >
          <AppTypography
            variant="caption"
            color="secondary"
            component="a"
            href="https://www.deviantart.com/broace27/art/3am-lofi-art-GIF-846732723"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "0.55rem",
              textDecoration: "none",
              opacity: 0.75,
              "&:hover": {
                opacity: 1,
                textDecoration: "underline",
              },
            }}
          >
            3am lofi art · By BroAce27
          </AppTypography>
        </Box>
      </Box>

      <audio
        ref={audioRef}
        src={currentTrackData.src}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
      />

      <CardContent>
        <Stack>
          <Stack>
            <AppTypography variant="overline" color="primary">
              NOW PLAYING
            </AppTypography>

            <AppTypography variant="h6">
              {currentTrackData.title.toUpperCase()}
            </AppTypography>

            <AppTypography variant="body2" color="textSecondary">
              {currentTrackData.artist}
            </AppTypography>
          </Stack>

          <Stack sx={{ mt: 2 }}>
            <Slider
              size="small"
              value={currentTime}
              min={0}
              max={duration || 1}
              onChange={(_, value) => {
                const time = value as number;
                if (audioRef.current) {
                  audioRef.current.currentTime = time;
                }
                setCurrentTime(time);
              }}
            />

            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <AppTypography variant="caption" color="textSecondary">
                {formatTime(currentTime)}
              </AppTypography>

              <AppTypography variant="caption" color="textSecondary">
                {formatTime(duration)}
              </AppTypography>
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center", my: 1 }}
          >
            <IconButton onClick={previousTrack}>
              <SkipPreviousIcon color="secondary" />
            </IconButton>

            <IconButton
              color="primary"
              onClick={togglePlay}
              sx={{
                border: 1,
                borderColor: "primary.main",
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>

            <IconButton onClick={nextTrack}>
              <SkipNextIcon color="secondary" />
            </IconButton>

            <IconButton color="secondary" aria-label="Volume">
              <VolumeUpIcon />
            </IconButton>

            <Slider
              size="small"
              value={volume * 100}
              min={0}
              max={100}
              onChange={(_, value) => setVolume((value as number) / 100)}
            />
          </Stack>

          <AppTypography
            variant="caption"
            color="textSecondary"
            component="a"
            href={currentTrackData.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "center",
              fontSize: "0.6rem",
              mt: 1,
              textDecoration: "none",
              opacity: 0.75,
              "&:hover": {
                opacity: 1,
                textDecoration: "underline",
              },
            }}
          >
            {currentTrackData.title} · {currentTrackData.artist} · CC BY 3.0
          </AppTypography>
        </Stack>
      </CardContent>
    </AppCard>
  );
}
