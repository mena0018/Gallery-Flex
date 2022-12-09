import { useEffect } from "react";
import Bamboos from "../img/bamboos.jpg";
import Castle from "../img/castle.jpg";
import Fuji from "../img/fuji.jpg";
import Lights from "../img/lights.jpg";
import Porte from "../img/porte.jpg";
import Store from "../img/store.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const ImageList = () => {
  const listImages = [Bamboos, Castle, Fuji, Lights, Porte, Store];
  const list = [...listImages, ...listImages, ...listImages, ...listImages];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ul className="max-w-6xl mx-auto flex flex-wrap gap-6 p-8">
      {list.map((image: string, index: number) => (
        <li key={index} className="h-[250px] grow">
          <img
            src={image}
            className="w-full h-full object-cover"
            data-aos={index < 15 ? "zoom-out-left" : "zoom-out-right"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
