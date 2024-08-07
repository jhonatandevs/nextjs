import type { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About Page Title",
  description: "PRICING Description",
  keywords:['Esta es la pagina de precios','NextJS'],
  icons:{
    icon: '/next.svg',
  }
};
export default function AboutPage() {
  return (
    <main className='flex flex-col items-center p-24'>
        <span className='text-sm'>Hola Mundo</span>
      <span className='text-5xl'>About works.!</span>
    </main>
  )
}
