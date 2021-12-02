import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageSections from "./components/PageSections";
import SideBarNavigation from "./components/SideBarNavigation";
import './reset.css';

function App() {
  return (
    <div>
      <Header />
      <PageSections />
      <SideBarNavigation />
      <Footer />
    </div>
  );
}

export default App;
