import Image from 'next/image'
import { MdOutlineShoppingCart } from "react-icons/md";
import { ThemeToggle } from '../buttons/ThemeToogle'
import { Button } from '../ui/button';

export const ShopNav = () => {
  return (
    <nav>
      <nav className='sticky z-50 h-16 top-0 backdrop:blur-lg flex bg-white shadow-sm flex-row items-center justify-between p-2 px-4 lg:px-8 dark:bg-gray-800'>
        <Image
          draggable={false}
          src='/leaf_logo.svg'
          alt='Leaf Logo'
          className='dark:invert'
          width={33}
          height={33}
          priority
        />

        <ul className='flex space-x-2 text-sm'>
        <Button><MdOutlineShoppingCart/></Button>
          <ThemeToggle />
        </ul>
      </nav>
    </nav>
  )
}
