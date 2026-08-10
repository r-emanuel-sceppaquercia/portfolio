import {
  AppButton,
  AppSection,
  AppTypography,
  SectionHeader,
} from "@/components/common";
import { IconButton, Stack } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SiSketchfab } from "react-icons/si";
import { LiaItchIo } from "react-icons/lia";
import { LiaArtstation } from "react-icons/lia";

export function Contact() {
  return (
    <AppSection id="contact">
      <SectionHeader overline="CONTACT" title="Get in touch" />

      <AppTypography color="textSecondary" sx={{ maxWidth: 1000 }}>
        Whether you want to discuss a project, share an idea or simply connect,
        feel free to reach out. I'm always open to interesting conversations
        about software and technology.
      </AppTypography>

      <AppButton
        variant="contained"
        size="large"
        startIcon={<EmailOutlinedIcon />}
        href="mailto:emanuel.sceppaquercia@gmail.com"
        sx={{ mt: 4 }}
      >
        Send me an email
      </AppButton>

      <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
        <IconButton
          component="a"
          href="https://github.com/r-emanuel-sceppaquercia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon sx={{ fontSize: 22 }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/emanuel-sceppaquercia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://ema-scpp.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="itch.io"
        >
          <LiaItchIo />
        </IconButton>

        <IconButton
          component="a"
          href="https://sketchfab.com/emanuel.sceppaquercia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sketchfab"
        >
          <SiSketchfab size={20} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.artstation.com/emanuel-sceppaquercia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ArtStation"
        >
          <LiaArtstation />
        </IconButton>
      </Stack>
    </AppSection>
  );
}
