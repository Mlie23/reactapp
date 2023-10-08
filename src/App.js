import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
function App() {
  return (

    <div class="= flex flex-col h-screen ">
      <Navbar class="" />
      <main class="flex-grow">
      <Landing/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
