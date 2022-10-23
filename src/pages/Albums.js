import ImagesList from "../components/ImagesList";


const Albums = (item) => {
  return <ImagesList key={item.id} category="Albums" number="1" imageName="album" />;
};

export default Albums;
