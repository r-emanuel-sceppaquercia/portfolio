import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrolled } from "@/hooks/useScrolled";
import { scrollToSection } from "@/utils/scroll";

export default function BackToTopButton() {
  const visible = useScrolled(500);

  return (
    <IconButton
      aria-label="Back to top"
      onClick={() => scrollToSection("hero")}
      sx={{
        position: "fixed",
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 1000,

        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0)" : "translateY(10px)",

        transition: "opacity .5s ease, transform .5s ease, visibility .5s ease",

        border: 1,
        borderColor: "primary.main",
        backgroundColor: "background.paper",

        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
      }}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
}
