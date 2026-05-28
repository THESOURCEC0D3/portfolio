import ShutterNavigation from "./components/ShutterNavigation";

export const metadata = {
  title:
    "Shutter Studios — Photographing Nigerian Weddings, Portraits, and Brands",
  description:
    "A Port Harcourt photography studio specializing in weddings, portraits, and commercial work across Nigeria.",
};

export default function ShutterStudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShutterNavigation />
      {children}
    </>
  );
}
