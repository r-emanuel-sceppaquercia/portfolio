import Box from "@mui/material/Box";
import { AppContainer } from "@/components/common/AppContainer";
import type { ContainerProps } from "@mui/material";

interface AppSectionProps extends ContainerProps {
  id?: string;
  children: React.ReactNode;
}

export function AppSection({ id, sx, children }: AppSectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <AppContainer>{children}</AppContainer>
    </Box>
  );
}
