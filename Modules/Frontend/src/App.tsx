import { MainLayout } from "@layouts/MainLayout";
import Hero from "@/sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainLayout>
    </>
  );
}
