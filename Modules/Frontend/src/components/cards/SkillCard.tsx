import { CardContent, Chip, Stack } from "@mui/material";
import { AppCard, AppTypography } from "../common";
import type { SkillCategory } from "@/constants/SkillsData";

export default function SkillCard({ title, skills }: SkillCategory) {
  return (
    <AppCard sx={{ height: "100%" }}>
      <CardContent>
        <Stack spacing={2}>
          <AppTypography variant="h6">{title}</AppTypography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {skills.map((skill) => (
              <Chip
                key={skill.name}
                icon={
                  skill.icon ? (
                    <skill.icon size={16} color="textSecondary" />
                  ) : undefined
                }
                label={skill.name}
                sx={{
                  transition: "all .2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                    color: "primary.main",
                    cursor: "default",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </AppCard>
  );
}
