export function scrollToSection(sectionId: string) {
  if (sectionId === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
