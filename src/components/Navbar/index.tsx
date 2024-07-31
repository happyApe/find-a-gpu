import React from 'react'
import { Button } from '@/components/ui/button';
import AuthButton from './AuthButton';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
        <div className="text-xl font-bold">Find Me GPU</div>
        <div
            className='flex items-center gap-x-4'
        >
            <Button>GPU Credits</Button>
            <AuthButton />
        </div>
    </nav>
  )
}

export default Navbar