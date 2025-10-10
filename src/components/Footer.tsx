import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-4">
              Ekdant Associates
            </h3>
            <p className="text-muted-foreground text-sm">
              Commit to Care - Building dreams with excellence and dedication.
            </p>
          </div>

          {/* Taxation Details (replacing Quick Links) */}
          <div>
            <h4 className="font-semibold mb-4">Company Taxation Details</h4>
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead>
                <tr>
                  <th className="pb-1">Sr No</th>
                  <th className="pb-1">Registration Number</th>
                  <th className="pb-1">Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AAJFE4057C</td>
                  <td>INCOME TAX – GOVT.OF INDIA</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2788JEF4057C1ZM</td>
                  <td>GOODS, SERVICES TAX – GOVT.OF INDIA</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Shop no.3 Gangotri apartment, Sanyukta Nagar, Achole Cross Road, Nallasopara East 401209
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+917768875444" className="text-muted-foreground hover:text-primary transition-colors">
                  7768875444 / 7738222255
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:ekdant_associates@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ekdant_associates@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ekdant_associates/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ekdant Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
