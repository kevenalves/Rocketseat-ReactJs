import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        thead{

            tr{
                @media (max-width:414px){
                    width: 90vw;
                    display: flex;
                    justify-content: space-between;
                }
            }

        }

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

        &.mobileTh{
            display: none;
        }

        &.transactionLength{
            display: none;
        }

            @media (max-width:414px){
               display: none;

                &.mobileTh{
                    display: block;
                    color: var(--text-title);
                    font-weight: 600;
                    font-size: 1.2rem;
                }

                &.transactionLength{
                    display: block;
                    right: 1rem;
                }

            }
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }
    }

    tbody {
        td{
            @media (max-width: 414px){
                display: flex;

                &.mobileNone{
                    display: none;
                }
            }
        }
    }

`;