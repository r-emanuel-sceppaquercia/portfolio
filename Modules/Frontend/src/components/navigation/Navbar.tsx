import { AppButton, AppContainer, AppTypography } from "../common";
import { AppBar, Toolbar, Box } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const navigationItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <AppContainer>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <AppTypography variant="h6">ES</AppTypography>
          </Box>

          {/* Navigation  */}
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
              <AppButton key={item.target} color="inherit">
                {item.label}
              </AppButton>
            ))}
            <AppButton variant="contained" sx={{ ml: 2 }}>
              Download CV
            </AppButton>
          </Box>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
