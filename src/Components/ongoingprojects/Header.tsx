import { Link } from "react-router-dom";
// import logo from "@/assets/sadhisha-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-foreground hover:text-primary transition-colors">
          HOME
        </Link>
        
        <Link to="/" className="flex items-center">
          {/* <img src={logo} alt="Sadhisha Homes" className="h-16" /> */}
        </Link>
        
        <Link to="/#investor" className="text-foreground hover:text-primary transition-colors">
          INVESTOR CLUB
        </Link>
      </nav>
    </header>
  );
};

export default Header;
