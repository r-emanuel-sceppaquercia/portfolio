import { AppSection, AppTypography, SectionHeader } from "@/components/common";

export function Contact() {
  return (
    <AppSection id="contact">
      <SectionHeader overline="CONTACT" title="Have any doubt?" />

      <AppTypography color="textSecondary" sx={{ maxWidth: 1000 }}>
        This is how you can contact me!
      </AppTypography>
    </AppSection>
  );
}
