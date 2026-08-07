import ProjectCard from "@/components/cards/ProjectCard";
import { AppSection, AppTypography, SectionHeader } from "@/components/common";
import { projects } from "@/constants/ProjectsData";
import { Grid } from "@mui/material";

export function Projects() {
  return (
    <AppSection id="projects">
      <SectionHeader overline="PROJECTS" title="Things I've Created" />

      <AppTypography color="textSecondary" sx={{ maxWidth: 1000 }}>
        A selection of projects that reflect my journey as a developer. From web
        applications to game development and 3D art, each one taught me
        something new about software design, problem solving and building
        maintainable and performant solutions.
      </AppTypography>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {projects.map((project) => (
          <Grid key={project.title} size={{ xs: 12, sm: 4 }}>
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              img={project.img}
              category={project.category}
              status={project.status}
              featured={project.featured}
              github={project.github}
              demo={project.demo}
            />
          </Grid>
        ))}
      </Grid>
    </AppSection>
  );
}
