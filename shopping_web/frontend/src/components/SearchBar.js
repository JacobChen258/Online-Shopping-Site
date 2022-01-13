import React, {useRef} from "react";
import searchBar from "../css/search_bar.css";

export default function SearchBar(){
    return (
        <form action="/" method="get" className={searchBar.search_bar}>
            <input
                type="text"
                id="search_bar"
                placeholder="Search item by name"
                name="seach_content"
                className={searchBar.search_text}
            />
            <button type="submit" className={searchBar.search_button}>Search</button>
        </form>
    )
}