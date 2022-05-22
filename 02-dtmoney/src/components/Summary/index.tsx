import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Sumary() {
    const { transactions } = useTransactions();

    const sumary = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === 'deposit') {
            accumulator.deposits += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.withdraw += transaction.amount;
            accumulator.total -= transaction.amount;
        }

        return accumulator;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas" />
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.withdraw)}
                </strong>
            </div>

            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)}
                </strong>
            </div>
        </Container>
    )
}