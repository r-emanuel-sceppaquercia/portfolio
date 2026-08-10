export function downloadCV() {
  const link = document.createElement("a");

  link.href = `${import.meta.env.BASE_URL}assets/cv.pdf`;
  link.download = "Emanuel_Sceppaquercia_CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
