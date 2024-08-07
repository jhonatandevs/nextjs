import type { Metadata } from 'next/types';
import React from 'react'

export const metadata: Metadata = {
    title: "Pricing Title",
    description: "PRICING Description",
    keywords:['Esta es la pagina de precios','NextJS']
  };
export default function PricingPage() {
  return (
    <div>
    <span className='text-5xl'>Pricing works</span>
    </div>
  )
}
