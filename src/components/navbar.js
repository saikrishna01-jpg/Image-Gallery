import react from "react";


export default function Navbar(props) {

    return (
        <nav className={props.darkMode ? "dark":""}>
            <span className={props.darkMode ? "nav-title-dark" : "nav-title"}>Image Gallery</span>
            <input className="search"
             type="search"
             name=""
             id="search"
             placeholder="Animals in the wild"
             value={props.query}
             onChange={(e) => props.setQuery(e.target.value)}
             />
            <span className={props.darkMode ? "nav-txt-dark" : "nav-txt"}>Explore</span>
            <span className={props.darkMode ? "nav-txt-dark" : "nav-txt"}>Collection</span>
            <span className={props.darkMode ? "nav-txt-dark" : "nav-txt"}>Community</span>
            <span className={props.darkMode ? "nav-txt-dark" : "nav-txt"}>Dark Mode</span>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round" onClick={props.toggleDarkMode}></span>
            </label>
        </nav>
    )
}