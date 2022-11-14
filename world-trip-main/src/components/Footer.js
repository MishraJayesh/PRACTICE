import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>World Trip</h1>
          <p>Choose your Destination</p>
        </div>
      </div>
      <div>
        <a href="/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Press Kit</a>
          <a href="/">Jobs</a>
          <a href="/">Status</a>
        </div>
        <div>
          <h4>Learn More</h4>
          <a href="/">Pricing</a>
          <a href="/"> App</a>
          <a href="/"> Teams</a>
          <a href="/"> Creators</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/">Contact</a>
          <a href="/">FAQ</a>
          <a href="/">Terms of use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Creator Terms</a>
        </div>
        <div>
          <h4>Social Media</h4>
          <a href="/">facebook</a>
          <a href="/">twitter</a>
          <a href="/">instagram</a>
          <a href="/">Google plus</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
