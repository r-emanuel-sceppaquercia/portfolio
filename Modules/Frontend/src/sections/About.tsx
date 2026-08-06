import { AppSection, AppTypography, SectionHeader } from "@/components/common";
import { Grid, Stack } from "@mui/material";

export function About() {
  return (
    <AppSection id="about">
      <SectionHeader overline="ABOUT" title="Who I am" />

      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <AppTypography color="textSecondary" sx={{ maxWidth: 650 }}>
              I'm a Full Stack Developer focused on building modern and
              maintainable web applications using Java, Spring Boot, React and
              TypeScript.
            </AppTypography>

            <AppTypography color="textSecondary" sx={{ maxWidth: 650 }}>
              I enjoy turning ideas into software that is clean, scalable and
              easy to maintain. I pay close attention to architecture, code
              quality and user experience to build applications that are
              reliable and pleasant to use.
            </AppTypography>

            <AppTypography color="textSecondary" sx={{ maxWidth: 650 }}>
              I'm constantly improving my skills through personal projects,
              exploring new technologies and refining my development practices
              through every application I build.
            </AppTypography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>{/* Quick facts card */}</Grid>
      </Grid>
    </AppSection>
  );
}
