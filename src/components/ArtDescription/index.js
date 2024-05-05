import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
// import ArtImageTile from "../ArtImageTile";

const ArtDescription = ({ gallery }) => {
    const { artId } = useParams();
    // console.log(gallery)
    // console.log(artId)
    return (
        <>
            <Link to={`/galleries/${gallery.id}`}>Back to Gallery {gallery.name}</Link>
            <h1> art description</h1>
            {/* <Link to={'/' + gallery.url}>{gallery.name}</Link> */}
            <a href={gallery.url} target="_blank" rel="noopener noreferrer">{gallery.name}</a>
            {gallery.objects.map(object => {
                // console.log(object)
                return (
                    <div className="art-work-card">
                        {object.images.map(image => {
                            // console.log('image', image)
                            return (
                                <>
                                    <img src={image.baseimageurl} alt={image.alttext}></img>
                                    <p>{image.description}</p>
                                    <p>{image.copyrigt}</p>
                                    <p>{image.technique}</p>
                                </>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}
export default ArtDescription;
