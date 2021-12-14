import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import {GithubProvider} from "./context/github/GithubContext";


function App() {
  return (
      <GithubProvider>
    <BrowserRouter>
        <div className={'flex flex-col justify-between h-auto'}>
            <Navbar/>
            <main className={'container mx-auto px-3 pb-12'}>
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
  );
}

export default App;
