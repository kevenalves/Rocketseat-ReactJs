import styled from "styled-components";

export const Section = styled.section`

div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
    font-size: 1.5rem;
    color: gray;
    margin: 1rem 0 1rem 1rem;
    }

    p{
        color: gray;
        margin: 1rem 2rem 1rem 0;
    }
}

li{
    margin: 0rem 0rem 2rem 1rem;
    list-style: none;

    p{
        margin-bottom: .5rem;
    }

    a{
        text-decoration: none;
        color: var(--colorBorder);
        border-bottom: 1px solid violet;

        &:hover{
            color: violet;
            border-bottom: 1px solid var(--colorBorder);
        }
    }
}
`;