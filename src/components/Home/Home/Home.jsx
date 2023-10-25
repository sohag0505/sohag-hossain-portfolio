import { MantineProvider } from "@mantine/core";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import MyProject from "../../MyProject/MyProject";
import Navbar from "../../Navbar/Navbar";
import Skills from "../../Skills/Skills";
import TopSection from "../../TopSection/TopSection";

const Home = () => {
  return (
    <div id="home">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <TopSection></TopSection>
        <Skills></Skills>
        <MyProject></MyProject>
        <MantineProvider>
          <Contact></Contact>
        </MantineProvider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
