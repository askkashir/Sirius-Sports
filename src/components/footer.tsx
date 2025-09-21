export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sirius Sports - Crafted for Champions
        </p>
      </div>
    </footer>
  );
}
