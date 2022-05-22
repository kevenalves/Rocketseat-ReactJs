import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    @media (max-width: 414px){
            overflow:auto;
        }

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        @media (max-width: 414px){
            padding: 1.5rem 5rem;
        }

        @media (max-width: 375px){
            padding: 1.5rem 4rem;
        }

            header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.hightlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`;