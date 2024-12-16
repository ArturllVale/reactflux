"use client";
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-1 flex-wrap items-center justify-center">
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy now
        </a>
      </footer>
    </div>
  );
}
