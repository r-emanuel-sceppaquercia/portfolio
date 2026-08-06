import SkillCard from "@/components/cards/SkillCard";
import { AppSection, AppTypography, SectionHeader } from "@/components/common";
import type { SkillCategory } from "@/constants/SkillsData";
import { Grid } from "@mui/material";
import { skillCategories } from "@/constants/SkillsData";

export function Skills() {
  return (
    <AppSection id="skills">
      <SectionHeader overline="SKILLS" title="Tech Stack" />
      <AppTypography color="textSecondary" sx={{ maxWidth: 1000 }}>
        These are the technologies I use to build web applications.
      </AppTypography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {skillCategories.map((data: SkillCategory) => (
          <Grid key={data.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <SkillCard title={data.title} skills={data.skills}></SkillCard>
          </Grid>
        ))}
      </Grid>
    </AppSection>
  );
}
