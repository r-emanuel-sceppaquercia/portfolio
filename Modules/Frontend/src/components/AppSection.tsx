import Box from "@mui/material/Box";
import { AppContainer } from "@components/AppContainer";

interface AppSectionProps {
  id?: string;
  children: React.ReactNode;
}

export function AppSection({ id, children }: AppSectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <AppContainer>{children}</AppContainer>
    </Box>
  );
}
