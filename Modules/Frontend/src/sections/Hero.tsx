import { Box, Grid, IconButton, Stack, Chip } from "@mui/material";
import { AppButton, AppSection, AppTypography } from "@/components/common";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NAVBAR_HEIGHT } from "@/constants/Layout";

const technologies = ["Java", "Spring Boot", "React", "TypeScript"];

export default function Hero() {
  return (
    <AppSection id="hero" sx={{ py: 0 }}>
      <Box
        sx={{
          minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Presentation */}
            <Stack spacing={3}>
              <AppTypography variant="h5" color="textSecondary">
                Hello, I'm Emanuel 👋
              </AppTypography>

              <Stack spacing={1}>
                <AppTypography variant="h1">Full Stack Developer</AppTypography>
                <AppTypography
                  variant="h5"
                  color="textSecondary"
                  sx={{ fontSize: "0.75em" }}
                >
                  Building modern web applications
                </AppTypography>
              </Stack>

              <AppTypography
                variant="body1"
                color="textSecondary"
                sx={{ maxWidth: 800 }}
              >
                I develop scalable web applications using Java, Spring Boot,
                React and TypeScript.
              </AppTypography>

              <AppTypography
                variant="body1"
                color="textSecondary"
                sx={{ maxWidth: 800 }}
              >
                I focus on clean code, maintainable architecture and great user
                experiences.
              </AppTypography>

              {/* Stack */}
              <Stack direction="row" spacing={1} useFlexGap>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>

              {/* Buttons */}
              <Stack direction="row" spacing={2}>
                <AppButton variant="contained" endIcon={<ArrowForwardIcon />}>
                  Projects
                </AppButton>

                <AppButton variant="outlined" endIcon={<DownloadIcon />}>
                  Download CV
                </AppButton>
              </Stack>

              {/* Social media */}
              <Stack direction="row" spacing={1}>
                <IconButton>
                  <GitHubIcon />
                </IconButton>

                <IconButton>
                  <LinkedInIcon />
                </IconButton>

                <IconButton>
                  <EmailOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>{/* Image or ilustration */}</Grid>
        </Grid>
      </Box>
    </AppSection>
  );
}
