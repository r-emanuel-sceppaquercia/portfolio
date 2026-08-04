export function downloadCV() {
  const link = document.createElement("a");

  link.href = "/cv/Emanuel_Sceppaquercia_CV.pdf";
  link.download = "Emanuel_Sceppaquercia_CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
