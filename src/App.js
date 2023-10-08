import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Error from './components/Error';

function App() {
  return (

    <div class="= mx-auto max-w-7xl py-2 px-4">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
