import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './GalleryNavigation.css';
// let i = 0;
const GalleryNavigation = ({ galleries }) => {
    return (
        <nav>
            <h1>Galleries</h1>
            <ul>
                <li key={856}>
                    <NavLink exact to='/'>home</NavLink>
                </li>
                {/* <li><NavLink></NavLink></li> */}
                {galleries.map(gallery => {
                    const { id } = gallery;
                    return (
                        <li key={id}>
                            <NavLink exact to={`/galleries/${id}`}>{id}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default GalleryNavigation;
