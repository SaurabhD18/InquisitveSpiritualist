import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className="border-b-2 flex justify-between items-center px-4 py-2">
      {/* Logo / Brand */}
      <Link to="/" className="text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Inquisitive
        </span>{" "}
        Spiritualist
      </Link>

      {/* Search Input and Button */}
      <div className="flex items-center gap-2">
        <form className="hidden lg:flex">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            
            className="w-64"
          />
        </form>
        
        {/* Mobile Search Button */}
        <Button className="lg:hidden rounded-full" color="gray" >
          <AiOutlineSearch />
        </Button>
        
      </div>
      <div className="flex flex-wrap gap-2 md:order" color='blue'>
            <Button className='w-12 h-10 hidden sm:inline rounded-full' color='gray' >
                <FaMoon className='text-xl'/>
            </Button>
            
            <Link to='/sign-in'>
    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
        Sign In
    </Button>
            </Link>
            
    <div className="hidden lg:flex space-x-4">
        <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-500">
            Home
        </Link>
        <Link to="/about" className="text-gray-700 dark:text-white hover:text-blue-500">
            About
            </Link>
        <Link to="/projects" className="text-gray-700 dark:text-white hover:text-blue-500">
            Projects
            </Link>
    </div>

    </div>

    </Navbar>
  );
}
