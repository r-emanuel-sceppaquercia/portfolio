import { Box, Divider } from "@mui/material";
import { AppTypography } from "../common";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: "center" }}>
      <Divider sx={{ mb: 2 }} />
      <AppTypography
        variant="h5"
        color="textSecondary"
        sx={{ fontSize: "0.8rem" }}
      >
        © 2026 Emanuel Sceppaquercia
      </AppTypography>
      <AppTypography
        variant="h5"
        color="textSecondary"
        sx={{ fontSize: "0.6rem" }}
      >
        Built with React, TypeScript & Material UI.
      </AppTypography>
    </Box>
  );
}
