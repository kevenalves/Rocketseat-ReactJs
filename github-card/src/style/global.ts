import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --colorBackground: #0B0E14;
    --colorBorder: #171E2B;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 87.5%;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}
button {
    cursor: pointer;
}

main{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .find{
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;

        @media (max-width:375px){
            width: 350px;
        }

        h1{
            font-size: 1.5rem;
            text-align: center;
            margin: 3rem 0 1rem 0;
        }

        button{
            display: block;
            width: 8rem;
            background-color: transparent;
            border-radius: .5rem;
            border: 2px solid var(--colorBorder);
            margin-top: 1.5rem;

            transition: .3s;

            &:hover{
                color: #fff;
                border: 2px solid var(--colorBorder);
                background-color: var(--colorBorder);
            }
        }






            /*
    =====
    RESET STYLES INPUT
    =====
    */

    .field__input{ 
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
    
    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: inherit;
    }

    .field__input:focus::-webkit-input-placeholder{
    color: var(--uiFieldPlaceholderColor);
    }

    .field__input:focus::-moz-placeholder{
    color: var(--uiFieldPlaceholderColor);
    }

    /*
    =====
    CORE STYLES
    =====
    */

    .field{
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);   
    --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

    display: var(--fieldDisplay, inline-flex);
    position: relative;
    font-size: var(--fieldFontSize, 1rem);
    }

    .field__input{
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 3rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));  
    }

    .field__input:focus{
    outline: none;
    }

    .field__input::-webkit-input-placeholder{
    opacity: 0;
    transition: opacity .2s ease-out;
    }

    .field__input::-moz-placeholder{
    opacity: 0;
    transition: opacity .2s ease-out;
    }

    .field__input:focus::-webkit-input-placeholder{
    opacity: 1;
    transition-delay: .2s;
    }

    .field__input:focus::-moz-placeholder{
    opacity: 1;
    transition-delay: .2s;
    }

    .field__label-wrap{
    box-sizing: border-box;
    pointer-events: none;
    cursor: text;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    }

    .field__label-wrap::after{
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;
    }

    .field__input:focus ~ .field__label-wrap::after{
    opacity: 1;
    }

    .field__label{
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    top: calc(50% - .5em);

    line-height: 1;
    font-size: var(--fieldHintFontSize, inherit);

    transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
    will-change: bottom, opacity, font-size;
    }

    .field__input:focus ~ .field__label-wrap .field__label,
    .field__input:not(:placeholder-shown) ~ .field__label-wrap .field__label{
    --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

    top: var(--fieldHintTopHover, .25rem);
    }

    /* 
    effect 1
    */

    .field_v1 .field__label-wrap::after{
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: opacity .2s ease-out;
    will-change: opacity;
    }

    .field{
  --fieldBorderColor: gray;
  --fieldBorderColorActive: #171E2B;
}















    }
}
`;