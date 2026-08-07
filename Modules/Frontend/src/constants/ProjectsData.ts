export interface Project {
  title: string;
  description: string;
  technologies: string[];
  img: string;
  category: string;
  status: string;
  featured: boolean;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Stalker Based Dioram",
    description:
      "A post-apocalyptic scene inspired by S.T.A.L.K.E.R., modeled in Maya and textured with Substance Painter",
    technologies: ["Maya", "Substance painter"],
    img: "/images/stalker_village_mock.png",
    category: "3D ART",
    status: "Finished",
    featured: true,
    github: "",
    demo: "https://sketchfab.com/3d-models/stalker-village-dioram-fbd0ab9b72ee4eddbb230470e8d30ec8",
  },
  {
    title: "Fear & Souls",
    description:
      "Demo of my first game, developed with Construct 2, featuring custom mechanics, artwork and animations.",
    technologies: ["Construct2", "Photoshop", "Dragon Bones"],
    img: "/images/fear_and_souls_mock.png",
    category: "GAME DEVELOPMENT",
    status: "Prototype/Demo",
    featured: false,
    github: "",
    demo: "https://ema-scpp.itch.io/fears-and-souls",
  },
  {
    title: "Character Concept Art",
    description:
      "Human/animal hybrid character design for a 2D video game project. Created with Photoshop and animated with Dragon Bones",
    technologies: ["Photoshop", "Dragon bones"],
    img: "/images/boss_design_mock.jpg",
    category: "2D ART & ANIMATION",
    status: "Finished",
    featured: false,
    github: "",
    demo: "https://www.artstation.com/artwork/x3K4LY",
  },
];
