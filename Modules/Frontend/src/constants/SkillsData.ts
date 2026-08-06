import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiSpringsecurity } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPrettier } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiBitbucket } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { SiDbeaver } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAudacity } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { BiLogoAdobe } from "react-icons/bi";
import { CiServer } from "react-icons/ci";

interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "REST APIs", icon: CiServer },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "Material UI", icon: SiMui },
      { name: "Prettier", icon: SiPrettier },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySql", icon: SiMysql },
      { name: "PostgreSql", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "DBeaver", icon: SiDbeaver },
      { name: "Jira", icon: SiJira },
    ],
  },
  {
    title: "Game Development",
    skills: [
      { name: "Unity", icon: SiUnity },
      { name: "C#" },
      { name: "Audacity", icon: SiAudacity },
    ],
  },
  {
    title: "3D Artist",
    skills: [
      { name: "Maya", icon: SiAutodeskmaya },
      { name: "Blender", icon: SiBlender },
      { name: "Substance Painter", icon: BiLogoAdobe },
      { name: "ZBrush" },
      { name: "Marmoset Toolbag" },
    ],
  },
];
