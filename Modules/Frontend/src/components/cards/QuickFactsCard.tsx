import { Box, CardContent, Divider, Stack } from "@mui/material";
import { AppCard, AppTypography } from "@/components/common";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CodeIcon from "@mui/icons-material/Code";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PaletteIcon from "@mui/icons-material/Palette";
import LayersIcon from "@mui/icons-material/Layers";
import TerrainIcon from "@mui/icons-material/Terrain";

const quickFacts = [
  {
    label: "Role",
    value: "Full Stack Developer",
    icon: <CodeIcon fontSize="small" />,
  },
  {
    label: "Focus",
    value: "Web Development · Game Development",
    icon: <TrackChangesIcon fontSize="small" />,
  },
  {
    label: "Background",
    value: "Software Development · Game Development · 3D Art",
    icon: <TerrainIcon fontSize="small" />,
  },
  {
    label: "Interests",
    value: "Web · Video Games · Digital Art",
    icon: <PaletteIcon fontSize="small" />,
  },
];

export default function QuickFactsCard() {
  return (
    <AppCard sx={{ height: "100%" }}>
      <CardContent>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <AppTypography variant="h6">Quick Facts</AppTypography>
            <CoffeeIcon
              fontSize="small"
              color="primary"
              sx={{
                alignItems: "center",
                transformOrigin: "70% 70%",
                animation: "wave 2.8s ease-in-out infinite",
                "@keyframes wave": {
                  "0%, 60%, 100%": { transform: "rotate(0deg)" },
                  "10%": { transform: "translateY(-1px) rotate(12deg)" },
                  "20%": { transform: "translateY(1px) rotate(-4deg)" },
                  "30%": { transform: "rotate(10deg)" },
                  "40%": { transform: "rotate(-2deg)" },
                  "50%": { transform: "rotate(4deg)" },
                  "60%": { transform: "rotate(0deg)" },
                },
              }}
            />
          </Stack>

          {quickFacts.map((fact) => (
            <Stack
              key={fact.label}
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                }}
              >
                {fact.icon}
              </Box>

              <Box>
                <AppTypography variant="overline" color="primary">
                  {fact.label}
                </AppTypography>

                <AppTypography color="textSecondary">
                  {fact.value}
                </AppTypography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </AppCard>
  );
}
