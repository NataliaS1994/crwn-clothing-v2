import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://i.ibb.co/ggH3hKq/joe-ciciarelli-Fw-Vn-AY-x-Ma-Y-unsplash.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Sneakers",
    imageUrl:
      "https://i.ibb.co/Nx6t7vy/kris-gerhard-0-BKZfcamv-Gg-unsplash.jpg",
    route: "shop/sneakers",
  },
  {
    id: 3,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/M7nvNF5/jordan-nix-4-Hmj9gky-M6c-unsplash.jpg",
    route: "shop/jackets",
  },
  {
    id: 4,
    title: "Mens",
    imageUrl:
      "https://i.ibb.co/P4LC4fJ/karl-fredrickson-Ds-Aj-H9-B24-G8-unsplash.jpg",
    route: "shop/mens",
  },
  {
    id: 5,
    title: "Womens",
    imageUrl: "https://i.ibb.co/FwhH6Mp/womens.jpg",
    route: "shop/womens",
  },
];

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
