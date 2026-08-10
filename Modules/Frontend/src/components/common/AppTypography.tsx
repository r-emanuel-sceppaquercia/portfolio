import Typography, { type TypographyProps } from "@mui/material/Typography";

interface AppTypographyProps extends TypographyProps {
  target?: string;
  href?: string;
}

export function AppTypography({ target, href, ...props }: AppTypographyProps) {
  return (
    <Typography
      component={target ? "a" : "p"}
      target={target}
      href={href}
      {...props}
      sx={{ overflowWrap: "break-word", ...props.sx }}
    />
  );
}
