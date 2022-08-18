import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/tiktak-logo.png';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between">
      <Link href="/">
        <div>
          <Image  
            className='cursor-pointer'
            src={ Logo }
            alt="TikTak"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar