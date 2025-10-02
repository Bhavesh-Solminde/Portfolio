import { socialInfos } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Made with ❤️ by me.</p>
        </div>
        <div className="socials">
          {socialInfos.map((socialinfo) => (
            <div key={socialinfo.index} className="icon">
              <a href={socialinfo.url}>
                <img src={socialinfo.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Bhavesh Solminde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
