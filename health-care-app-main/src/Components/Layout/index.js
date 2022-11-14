import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
