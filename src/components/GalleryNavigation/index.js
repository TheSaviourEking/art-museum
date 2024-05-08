import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
    return (
        <header>
            <h1>GalleryNavigation</h1>
            <nav>
                <NavLink exact to='/'>home</NavLink>
                {galleries.map(gallery => {
                    const { name, id } = gallery;
                    return (
                        <NavLink key={id} to={`/galleries/${id}`}>{name}</NavLink>
                    )
                })}
            </nav>
        </header>
    )
}

export default GalleryNavigation;
