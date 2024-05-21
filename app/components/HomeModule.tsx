import React from 'react'
import HomeHero from './HomeHero'
import { Featured } from './Featured'
import { Testimony } from './Testimony'
import { HighlightProduk } from './HighlightProduk'
const HomeModule = () => {
  return (
    <div className='text-center items-center flex flex-col gap-10'>
        <HomeHero/>
        <Featured/>
        <Testimony/>
        <HighlightProduk/>
    </div>
  )
}

export default HomeModule
