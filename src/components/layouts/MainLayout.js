import Footer from "../Dashboard/Footer";
import Navbar from "../Dashboard/Navbar";
import Scroller from "../Scroller";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Scroller />
    </>
  );
}
