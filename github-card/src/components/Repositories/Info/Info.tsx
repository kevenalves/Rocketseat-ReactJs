import { Container } from './styleInfo'

interface infoProps {
    infoCard: {
        info: {
            login: string;
            avatar_url: string;
            followers: number;
            following: number;
            twitter_username: string;
            blog: string;
        }
    }
}

export function InfoUser(props: infoProps) {

    return (
        <Container>
            <div className="divImg">
                < img src={props.infoCard.info.avatar_url} alt="imagem de perfil" />
            </div>

            <div className="info">
                <span>Seguidores: {props.infoCard.info.followers}</span>
                <span className="none"> | </span>
                <span>Seguindo: {props.infoCard.info.following}</span>
                <p>Twitter: {props.infoCard.info.twitter_username}</p>
                <p>Blog: {props.infoCard.info.blog}</p>
                <a rel="noreferrer" target="_blank" href={`https://github.com/${props.infoCard.info.login}`}>
                    <button type="button">Ver Perfil</button>
                </a>
            </div>
        </Container>
    )
}