import styled from "styled-components";

export const Container = styled.div`
height: 150px;
width: 100%;
background: var( --colorBorder);
display: flex;
align-items: flex-end;
border-radius: 2rem 2rem 0 0;


-webkit-box-shadow: -1px -8px 20px -10px #000000; 
box-shadow: -1px -8px 20px -10px #000000;
h1{
    color: #eee;
    margin-left: 50%;
    font-size: 1.7rem;

    @media (max-width: 375px){
        margin-right: 2rem;
    }
}
`;