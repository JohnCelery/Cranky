export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <p className="text-sm">&copy; 2025 Cranky Moon</p>
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            {/* Placeholder Instagram icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
          </a>
        </div>
        <nav className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
