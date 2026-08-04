import { Box, Stack } from "@mui/material";
import { AppButton, AppSection, AppTypography } from "@/components/common";

export default function Hero() {
  return (
    <AppSection>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={3}>
          <AppTypography variant="h5">Hola, soy Emanuel 👋</AppTypography>

          <AppTypography variant="h1">Full Stack Developer</AppTypography>

          <AppTypography variant="body1" sx={{ maxWidth: 650 }}>
            Desarrollo aplicaciones web escalables utilizando Java, Spring Boot,
            React y TypeScript, enfocándome en código limpio, arquitectura
            mantenible y una buena experiencia de usuario.
          </AppTypography>

          <Stack direction="row" spacing={2}>
            <AppButton variant="contained">Ver proyectos</AppButton>

            <AppButton variant="outlined">Descargar CV</AppButton>
          </Stack>
        </Stack>
      </Box>
    </AppSection>
  );
}
