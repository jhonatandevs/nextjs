import type { Metadata } from 'next/types';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Page Title",
    description: "Contact Description",
    keywords:['Esta es la pagina de contact','NextJS']
  };
export default function ContactPage() {
  return (
    <div>
     <span className='text-5xl'>Contact works</span>
    </div>
  )
}

