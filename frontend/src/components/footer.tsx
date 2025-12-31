/**
 * Footer Option 2 : Layout Centré Minimaliste
 * Design épuré et moderne
 * couleur #c76141
 */

import { Facebook, Github, Instagram, Linkedin } from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();
 

 

  return (
    <footer className=" relative text-white ">
      <div className=" absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-white "
          ></path>
        </svg>

        <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 p-20 ">
          {/* About Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl text-orange-500 ">Meite Yasmine</h2>
            <p className="mt-10px">
              Développeuse web et mobile full-stack, passionnée par le code et
              l’expérience utilisateur.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-5 lg:ml-26 ">
            <ul>
              <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                Liens
              </li>
              <li className="mb-3 list-none">
                <a href="#" className="">
                  Accueil
                </a>
              </li>
              <li className="mb-3 list-none">
                <a href="#" className="">
                  À propos
                </a>
              </li>

              <li className="mb-3 list-none">
                <a href="#" className="">
                  Projets
                </a>
              </li>
              <li className="bottom-10 list-none">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-5">
            <ul>
              <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                Legal
              </li>
              <li className="mb-3 list-none">
                <a href="#" className="">
                  Termes & Conditions
                </a>
              </li>
              <li className=" list-none">
                <a href="#" className="">
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-5 ml-20px">
            <ul>
              <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                Contact
              </li>
              <li className="mb-3  font-bold list-none">
                {" "}
                Email : meiteyasmine90@gmail.com{" "}
              </li>
              <li className="font-bold list-none"> Télephone : +216 54 665 760 </li>
            </ul>

            <div className=" flex space-x-4 ">
              <a
                href=""
                className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-[#c76141]"
              >
                <Github />
              </a>

              <a
                className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-[#c76141]"
                href=""
              >
                <Facebook />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-[#c76141]"
                href=""
              >
                <Linkedin />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-[#c76141]"
                href=""
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-center text-black">
            &copy; {currentYear} Meite Yasmine — Tous droits réservés.
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
