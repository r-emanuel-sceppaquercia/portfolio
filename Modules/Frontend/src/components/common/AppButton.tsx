import Button, { type ButtonProps } from "@mui/material/Button";

interface AppButtonProps extends ButtonProps {
  target?: string;
}

export function AppButton({ target, ...props }: AppButtonProps) {
  return (
    <Button
      {...props}
      component={props.href ? "a" : "button"}
      target={target}
      sx={{
        "&:hover": {
          backgroundColor:
            props.variant === "contained" ? undefined : "transparent",
          color: props.variant === "contained" ? undefined : "primary.main",
        },
        ...props.sx,
      }}
    />
  );
}
