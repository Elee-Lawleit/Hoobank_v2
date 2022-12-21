import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Hero, Footer } from '../components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary flexStart`}>
          <div className={`boxWidth`}>
            <Hero />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
