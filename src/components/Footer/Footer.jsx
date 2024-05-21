import "./Footer.css";
import { currentYear } from "../../utils/constants";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__signature">Developed by H. Ross Walker</h3>
      <p className="footer__signature">{currentYear}</p>
    </footer>
  );
}

export default Footer;
