import Button, { type ButtonProps } from "@mui/material/Button";

export function AppButton(props: ButtonProps) {
  return (
    <Button
      {...props}
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
