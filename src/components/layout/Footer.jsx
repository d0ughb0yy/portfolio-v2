const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Tin Lučić. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
