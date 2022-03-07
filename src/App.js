import {Blog, Features, WhatGPT3, Footer, Header, Possibility } from "./containers"
import { Navbar, Cta, Brand } from "./components"

import "./App.css"
import "./index.css"

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App