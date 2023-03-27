export const Navbar = () => {
  return (
    <header className="w-full h-fit min-h-20 bg-transparent overflow-hidden text-gh-white px-6 py-4 flex xs:justify-center md:justify-end absolute">
      <ul className="flex gap-5 md:gap-8 text-lg w-fit">
        <li>
          <a
            href="https://corderodev.com"
            className="hover:text-gh-green transition-all"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/corderodev"
            className="hover:text-gh-green transition-all"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://github.com/corderodev/github-user-search"
            className="hover:text-gh-green transition-all"
          >
            Repository
          </a>
        </li>
      </ul>
    </header>
  );
};
