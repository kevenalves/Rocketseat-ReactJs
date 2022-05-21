import styled from "styled-components";

export const Container = styled.div`
display: flex;

.divImg{
    height: 130px;
    width: 130px;
    background: var(--colorBorder);
    border-radius: 50%;
    margin-top: -4.5rem;
    margin-left: 1rem;
    border: 3px solid var(--colorBorder);

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        color: #fff;
    }
}

.info{

    margin-left: 1rem;
    margin-top: 1rem;

    span{
        font-size: 1rem;

        @media (max-width:375px){
            font-size: 1rem;
        }
    }

   a{
       text-decoration: none;

        button{
            display: block;
            background: var(--colorBorder);
            color: white;
            width: 8rem;
            height: 2rem;
            border-radius: .8rem;
            border: none;
            margin: 1rem auto;

            &:hover{
                filter: brightness(.9);
            }
        }
    }
}

`;