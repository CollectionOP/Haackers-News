const Footer = () => {
  return (
    <header>
      <nav>
        <div className="w-full lg:w-8/12 flex justify-between">
          <div className="w-full lg:w-5/12 flex justify-between">
            <ul className="">
              <a href="">
                <li className="text-zinc-400">Newsletters</li>
              </a>
              <a href="">
                <li className="text-zinc-400">Podcast</li>
              </a>
              <a href="">
                <li className="text-zinc-400">Support</li>
              </a>
            </ul>

            <ul className="">
              <a href="">
                <li className="text-zinc-400">Facebook</li>
              </a>
              <a href="">
                <li className="text-zinc-400">Instagram</li>
              </a>
              <a href="">
                <li className="text-zinc-400">RSS</li>
              </a>
            </ul>

            <ul className="">
              <a href="">
                <li className="text-zinc-400">About</li>
              </a>
              <a href="">
                <li className="text-zinc-400">Privacy</li>
              </a>
              <a href="">
                <li className="text-zinc-400">Cookies</li>
              </a>
            </ul>
          </div>
          <div>
            <a href="">
              <p className="text-zinc-800 bg-amber-400 p-2 rounded-md">Subscribe</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Footer;
