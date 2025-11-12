import { useState } from 'react'

import './App.css'
import Navbar from './layout/navbar'
import Sidebar from './layout/Sidebar'
import Cards from './components/Cards'
import Singers from './components/Singers'
import Footer from './components/Footer'
import Albums from './components/Albums'


export default function App() {
  return (
    <>
     
      <Navbar />

      <div className="flex">
      
        <Sidebar />

       
        <div className="ml-[300px] mt-64px flex-1 bg-black min-h-screen text-white p-6 overflow-y-auto">
          <Cards />
          <Singers />
          <Albums />
          <Footer />
        </div>
      </div>
    </>
  );
}
