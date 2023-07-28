type SearchProps = {
    loadUser: (userName: string) => Promise<void>; 
}

import {BsSearch} from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import style from "./Search.module.css"; 

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const hadleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName)
        }
    }
    return (
        <div className={style.search}>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={style.search_container}>
                <input 
                type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={hadleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search; 