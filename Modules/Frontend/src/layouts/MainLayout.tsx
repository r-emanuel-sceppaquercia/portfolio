import { Navbar } from "@components/navigation/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer>{/* wip */}</footer>
    </>
  );
}
