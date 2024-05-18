
import React from "react";
import Home from "./home/Home";
import Prices from "./Prices";
import Servises from "./Servises";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./NotFound";
import Programs from "./Programs";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Reps from "./Reps"
import MenuItemInformation from "./MenuItemInformation";
import ProgramInfo from "./ProgramInfo";
import IntegrationsPage from "./IntegrationsPage";
const Index = () => {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servises" element={<Servises />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/reps" element={<Reps />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/integrations-page" element={<IntegrationsPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/menu-item/:menuNumber" element={<MenuItemInformation />} />
      <Route path="/program-info/:programName" element={<ProgramInfo />} />
      <Route path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     <Footer/>

    </>
  );
};

export default Index;