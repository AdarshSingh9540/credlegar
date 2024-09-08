import ServerLayout from "@/app/(application)/ServerLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ServerLayout>{children}</ServerLayout>
    </div>
  );
}
