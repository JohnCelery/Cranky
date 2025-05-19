import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link href="/" aria-label="Home" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cranky-Moon logo" width={32} height={32} />
          <span className="font-bold">Cranky-Moon</span>
        </Link>

        <button
          className="md:hidden p-2"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} md:items-center md:space-x-6`}>
          <Link href="/" className="block py-2 md:py-0">Home</Link>
          <Link href="/shop" className="block py-2 md:py-0">Shop</Link>
          <Link href="/blog" className="block py-2 md:py-0">Blog</Link>
          <Link href="/about" className="block py-2 md:py-0">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/wishlist" aria-label="Wishlist">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-8.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8h11v8H7v-8zm0 0L5 5m2 8v8m10-8v8m-7 3a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </Link>
          <Link href="/login" aria-label="Login">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A3.5 3.5 0 017.5 16h9a3.5 3.5 0 012.379 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
