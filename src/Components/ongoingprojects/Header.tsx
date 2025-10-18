import { Link } from "react-router-dom";
import logo from  "../../assets/images/ongoingprojects/logo.webp"


const Header = () => {
  return (
    <header className="bg-black border-bottom">
      <nav className="container py-4">
        <div className="row align-items-center">
          <div className="col-4">
            <Link to="/" className="text-light text-decoration-none fw-semibold">
              HOME
            </Link>
          </div>
          
          <div className="col-4 text-center">
            <Link to="/" className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="Sadhisha Homes" style={{ height: '75px' }} />
            </Link>
          </div>
          
          <div className="col-4 text-end">
            <Link to="/investor-club" className="text-light text-decoration-none fw-semibold">
              INVESTOR CLUB
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
