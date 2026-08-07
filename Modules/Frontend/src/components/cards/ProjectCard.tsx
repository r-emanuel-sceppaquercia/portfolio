import { Box, CardContent, CardMedia, Chip, Stack } from "@mui/material";
import { AppButton, AppCard, AppTypography } from "../common";
import { type Project } from "@/constants/ProjectsData";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";

export default function ProjectCard({
  title,
  description,
  img,
  technologies,
  category,
  status,
  featured,
  github,
  demo,
}: Project) {
  return (
    <AppCard
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
          borderColor: "primary.main",
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{ height: 180, objectFit: "cover" }}
        />

        {featured && (
          <StarIcon
            fontSize="small"
            color="inherit"
            sx={{ position: "absolute", top: 8, left: 8 }}
          />
        )}

        <Chip
          label={status}
          size="small"
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            bgcolor: "rgba(0,0,0,.75)",
            backdropFilter: "blur(6px)",
          }}
        />
      </Box>

      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        {/* INFO */}
        <AppTypography variant="overline" color="primary">
          {category}
        </AppTypography>
        <AppTypography gutterBottom variant="h2" sx={{ fontSize: "1.6em" }}>
          {title}
        </AppTypography>
        <AppTypography variant="body2" color="textSecondary">
          {description}
        </AppTypography>

        {/* TECHS */}
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ flexWrap: "wrap", mt: 2 }}
        >
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </Stack>

        {/* LINKS */}
        <Stack direction="row" spacing={1} sx={{ mt: "auto", pt: 3 }}>
          {github && (
            <AppButton
              variant="outlined"
              size="small"
              color="primary"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              Github
            </AppButton>
          )}
          {demo && (
            <AppButton
              variant="contained"
              size="small"
              color="primary"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<OpenInNewIcon />}
            >
              Demo
            </AppButton>
          )}
        </Stack>
      </CardContent>
    </AppCard>
  );
}
