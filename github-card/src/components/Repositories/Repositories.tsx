import React, { useEffect } from "react";
import { useState } from "react";
import { Header } from "./Header/header";
import { InfoUser } from "./Info/Info";
import { MessageError } from "../MessageError/MessageError";
import { RepositoryItem } from "./RepositoryItem";
import { Section } from './style';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

interface infos {
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
    twitter_username: string;
    blog: string;
    message: string;
}


export function Repositories() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    const [info, setInfo] = useState<infos>({} as infos);
    const [githubUser, setGithubUser] = React.useState('')


    useEffect(() => {
        fetch(`https://api.github.com/users/kevenalves`)
        .then(response => response.json())
        .then(data => setInfo(data))

        fetch(`https://api.github.com/users/kevenalves/repos`)
            .then(response => response.json())
            .then(data => setRepositories(data))
            .catch(e => console.log(e))
    }, [])


    function handleSetUsuario() {
        
        if (!githubUser){
            return 

       } else {
        fetch(`https://api.github.com/users/${githubUser}`)
        .then(response => response.json())
        .then(data => setInfo(data))
        
        fetch(`https://api.github.com/users/${githubUser}/repos`)
            .then(response => response.json())
            .then(data => setRepositories(data))
        }

    }

    return (
        <>
            <div className="find">
                <h1>Digite seu usuário do Github</h1>

        <label className="field field_v1">
            <input className="field__input"
            placeholder="kevenalves"
            value={githubUser}
            onChange={(evento) => {
                setGithubUser(evento.target.value)
            }}
            />
            <span className="field__label-wrap">
            <span className="field__label">Usuário</span>
            </span>
        </label>

           {info.message === "Not Found" &&
           <MessageError /> }

                <button onClick={handleSetUsuario}>Buscar</button>
            </div>

            {info.message !== "Not Found" &&
             <>   
            <Header nameCard={{ info }}/>
            <InfoUser infoCard={{ info }} />
            <Section className="repository-list">
                <div>
                    <h1>Repositórios</h1>
                    <p>{repositories.length} Itens</p>
                </div>
                <ul>
                    { repositories.length > 0 &&
                    repositories.map(repository => {
                        return < RepositoryItem key={repository.name} repository={repository} />
                    })}
                </ul>
            </Section>
            </>
            }
        </>
    )
}