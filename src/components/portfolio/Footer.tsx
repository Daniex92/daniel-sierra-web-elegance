const Footer = () => {
  return (
    <footer className="section-darker py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daniel Sierra. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
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
