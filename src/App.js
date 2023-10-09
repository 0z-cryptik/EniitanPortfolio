import React, { useState } from 'react';
import './App.css'
import { NavBar } from './components/navbar';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Contact } from './components/contact';
import { About } from './components/about';
import { TechStack } from './components/stack';
import { Projects } from './components/projects';
import { Next } from './components/next';
import { Footer } from './components/footer';
import { useList } from './components/stateProvider';
import  MyAvatar  from './images/myAvatar.png'

const App = () => {
   
   const { dark } = useList()

   return <div id='body' className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <NavBar />
      <div style={{height:250}} className='bg-gradient-to-b via-[#00b4d8] from-[#0077b6] to-[#3c6e71]'></div>
      <img src={MyAvatar} className='h-[8rem] border mx-auto rounded-full -mt-[3.5rem]' />
      <p id='top' className='w-fit mx-auto font-bold text-xl'>Enitan Akinfenwa</p>
      <p className='w-fit mx-auto text-sm'>Frontend Software Developer</p>
      <p  className='w-fit mx-auto text-gray-500'>
         <HiOutlineLocationMarker className='inline -mt-1' />
         Nigeria
      </p>

      <section className='flex flex-row'>
         <About />
         <Contact />
      </section>

      <TechStack />

      <Projects />

      <Next />

      <Footer />
   </div>
}


export default App;
