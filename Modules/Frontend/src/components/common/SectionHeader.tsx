import { Stack } from "@mui/material";
import { AppTypography } from "./AppTypography";

export interface SectionHeaderProps {
  overline: string;
  title: string;
}

export function SectionHeader({ overline, title }: SectionHeaderProps) {
  return (
    <Stack spacing={1} sx={{ mb: 6 }}>
      <AppTypography variant="overline" color="primary">
        {overline}
      </AppTypography>

      <AppTypography variant="h2">{title}</AppTypography>
    </Stack>
  );
}
