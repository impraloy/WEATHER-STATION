import React from 'react';
import Layout from "./layout/Layout.jsx";
import Header from "./layout/Header.jsx";
import Body from "./layout/Body.jsx";
import Footer from "./layout/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Header />
                <Body />
            </BrowserRouter>
            <Footer />
        </Layout>
    )
}

export default App;