import {Container} from './styleHeader';

interface HeaderProps {
    nameCard: {
        info: {
            login: string;
            avatar_url: string;
            followers: number;
            following: number;
        }
    }
}

export function Header(props: HeaderProps){
    const name = props.nameCard.info.login;

    return (

        <Container>
            <h1>{name}</h1>
        </Container>


    )
}