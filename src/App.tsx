import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import {GithubProvider} from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";


function App() {


    return (
      <AlertProvider>
      <GithubProvider>
    <BrowserRouter>
        <div className={'flex flex-col justify-between h-full'}>
            <Navbar/>
            <main className={'container mx-auto px-3 pb-12'}>
                <Alert/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>

    </BrowserRouter>
      </GithubProvider>
      </AlertProvider>
  );
}

export default App;
