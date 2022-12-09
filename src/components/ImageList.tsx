import Bamboos from "../img/bamboos.jpg";
import Castle from "../img/castle.jpg";
import Fuji from "../img/fuji.jpg";
import Lights from "../img/lights.jpg";
import Porte from "../img/porte.jpg";
import Store from "../img/store.jpg";

const ImageList = () => {
  const listImages = [Bamboos, Castle, Fuji, Lights, Porte, Store];
  const list = [...listImages, ...listImages, ...listImages, ...listImages];

  return (
    <ul className="max-w-6xl mx-auto flex flex-wrap gap-6 p-8">
      {list.map((image: string, index: number) => (
        <li key={index} className="h-[250px] grow">
          <img src={image} className="w-full h-full object-cover" />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
