import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect( () => {
    setIsSSR(false);
  }, []);

  if(isSSR) return null;

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-6 md:gap-20">

      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
