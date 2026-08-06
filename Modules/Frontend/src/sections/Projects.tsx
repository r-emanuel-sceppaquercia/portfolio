import { AppSection, AppTypography, SectionHeader } from "@/components/common";

export function Projects() {
  return (
    <AppSection id="projects">
      <SectionHeader overline="PROJECTS" title="Things I've Built" />

      <AppTypography color="textSecondary" sx={{ maxWidth: 1000 }}>
        Here are some of the projects I've worked on, ranging from personal
        experiments to complete applications. Each project helped me improve my
        technical skills and solve different kinds of problems.
      </AppTypography>
    </AppSection>
  );
}
