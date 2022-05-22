import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransactionsTable(){
    const { transactions } = useTransactions();


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th className="mobileTh">Listagem</th>
                        <th className="transactionLength">{transactions.length} itens</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td className="mobileNone">{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR')
                                    .format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>

    );
}