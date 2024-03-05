const Footer = () => {
  return (
      <footer className="bg-zinc-800 h-44">
        <div className="w-full flex justify-around pt-5">

          <div className="w-5/12 flex justify-between h-32">
            <ul className="flex flex-col justify-around">
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

            <ul className="flex flex-col justify-around">
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

            <ul className="flex flex-col justify-around">
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
              <p className="text-zinc-800 bg-amber-400 p-2 rounded-md mt-2">Subscribe</p>
            </a>
          </div>

        </div>
      </footer>
  );
};

export default Footer;
