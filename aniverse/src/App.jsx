import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";

// import Section from "./components/partials/Section";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>

    // <Section> 
    //   <h1>
    //     hello malak
    //   </h1>
    // </Section>
  );

}

export default App;