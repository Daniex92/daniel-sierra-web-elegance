const Footer = () => {
  return (
    <footer className="section-darker py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Daniel Sierra — Bogotá, Colombia
          </p>
          <div className="flex items-center gap-8">
            {["LinkedIn", "Instagram", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
