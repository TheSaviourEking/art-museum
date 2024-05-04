import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const { name } = galleries.find(gallery => gallery.id === parseInt(galleryId))

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{name}</h2>
        </>
    )
}

export default GalleryView;
