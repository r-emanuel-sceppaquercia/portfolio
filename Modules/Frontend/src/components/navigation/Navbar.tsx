import { AppButton, AppContainer, AppTypography } from "../common";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Divider,
  alpha,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import { NAVBAR_HEIGHT } from "@/constants/Layout";
import { scrollToSection } from "@/utils/scroll";
import { downloadCV } from "@/utils/download";
import { useScrolled } from "@/hooks/useScrolled";
import { useRotatingText } from "@/hooks/useRotatingText";
import joystick from "@/../public/joystick.png";

const roles = ["Development", "Video Games", "3D Art"];

const navigationItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrolled = useScrolled(24);

  const { text: currentRole, visible: roleVisible } = useRotatingText(
    roles,
    3000,
    300,
  );

  const handleNavigation = (sectionId: string) => {
    closeMobileMenu();
    scrollToSection(sectionId);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={(theme) => ({
        backgroundColor: scrolled
          ? alpha(theme.palette.background.default, 0.78)
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? alpha(theme.palette.common.white, 0.08) : "transparent"}`,
        transition:
          "background-color .25s ease, backdrop-filter .25s ease, border-color .25s ease",
      })}
    >
      <AppContainer>
        <Toolbar
          disableGutters
          sx={{
            height: NAVBAR_HEIGHT,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AppButton color="inherit" onClick={() => handleNavigation("hero")}>
              <Box
                component="img"
                src={joystick}
                alt="Chip brain"
                sx={{ alignItems: "center", width: 28, height: 28, mr: 1.5 }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <AppTypography variant="h6" sx={{ lineHeight: 1 }}>
                  ES
                </AppTypography>

                <AppTypography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    fontSize: ".75em",
                    display: "block",
                    lineHeight: 1,
                    mt: 0.5,
                    opacity: roleVisible ? 1 : 0,
                    transform: roleVisible
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transition: "opacity .5s ease, transform .5s ease",
                  }}
                >
                  {currentRole}
                </AppTypography>
              </Box>
            </AppButton>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 1,
              alignItems: "center",
            }}
          >
            {navigationItems.map((item) => (
              <AppButton
                key={item.target}
                color="inherit"
                onClick={() => handleNavigation(item.target)}
                sx={{ ml: 2 }}
              >
                {item.label}
              </AppButton>
            ))}
            <AppButton
              variant="contained"
              sx={{ ml: 2 }}
              endIcon={<DownloadIcon />}
              onClick={downloadCV}
            >
              Download CV
            </AppButton>
          </Box>

          {/* Mobile Navigation */}
          <IconButton
            onClick={openMobileMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={closeMobileMenu}
          >
            <Box sx={{ width: 200, p: 2 }}>
              <AppTypography
                variant="h6"
                sx={{ mr: 2, textAlign: "end" }}
                onClick={() => handleNavigation("hero")}
              >
                ES
              </AppTypography>

              <Divider sx={{ my: 2 }} />

              {navigationItems.map((item) => (
                <AppButton
                  key={item.target}
                  fullWidth
                  sx={{ justifyContent: "flex-end" }}
                  onClick={() => handleNavigation(item.target)}
                >
                  {item.label}
                </AppButton>
              ))}

              <Divider sx={{ my: 2 }} />

              <AppButton
                fullWidth
                color="secondary"
                sx={{ mt: 2, justifyContent: "flex-end" }}
                onClick={downloadCV}
              >
                <DownloadIcon sx={{ mr: 1 }} />
                Download CV
              </AppButton>
            </Box>
          </Drawer>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
