import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ArtImageTile = ({ key, art, galleryId }) => {
    const { baseimageurl, alttext } = art.images[0];
    // console.log(object.images[0]);
    return (
        <Link to={`/galleries/${galleryId}/art/:artId`}>
            <img src={baseimageurl} alt={alttext}></img>
        </Link>
    )
}
export default ArtImageTile;
