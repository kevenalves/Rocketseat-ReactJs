import { Paragraph } from './style';
import iconErrorPng from '../Assets/iconError.png';

export function MessageError(){
    return (
        <Paragraph>
            <span> <img src={iconErrorPng} alt="Icon error" /></span> Usuário não encontrado!
            </Paragraph>
    )
}