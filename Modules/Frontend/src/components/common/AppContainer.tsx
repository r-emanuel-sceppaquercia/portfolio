import type { ReactNode } from "react";
import type { ContainerProps } from "@mui/material";
import Container from "@mui/material/Container";

export interface AppContainerProps extends ContainerProps {
  children: ReactNode;
}

export function AppContainer({
  children,
  maxWidth = "xl",
  sx,
  ...props
}: AppContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
