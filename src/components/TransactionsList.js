import styles from './TransactionsList.module.css'
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from './NewTransactionForm';
import {useState} from 'react'

const transactionsExample = [
    {
        id: '1234', 
        category: 'Transação', 
        title: 'Almoço muito gostoso que comi no ju com meu pai que fez churrasco',
        amount: '-23.00',
        date: '29/11/2023',
    },
    {
        id: '12345',
        category: 'Transação',
        title: 'Salário',
        amount: '300.00',
        date: '25/11/2023',
    },
    {
        id: '123456',
        category: 'Transação',
        title: 'Salário',
        amount: '300000.00',
        date: '25/11/2023',
    },
]

function TransactionsList() {
    const [transactions, setTransactions] = useState(transactionsExample);

    function handleDeleteTransaction(ID) {
        console.log(ID)
        setTransactions(
            transactions.filter(function(transaction){
                if (transaction.id !== ID) {
                    return transaction
                }
                return false
        }))
    }

    function addTransactionIntoDOM(transaction) {
        const operator = transaction.amount < 0 ? "-" : "+"
        const CSSclass = transaction.amount < 0 ? styles.minus : styles.plus
        const amountWithoutOperator = Math.abs(transaction.amount).toFixed(2)
    
        const amountText = <p>
            <span className={CSSclass}>{operator} R$ {amountWithoutOperator}</span>
            <button className={styles.deleteBtn} onClick={() => {handleDeleteTransaction(transaction.id)}}>
                x
            </button>
            </p>
    
        return amountText
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.headerTitle}>Transações</p>
                <Dialog.Root>
                    <Dialog.Trigger className={styles.newTransactionButton}>Nova Transação</Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className={styles.dialogOverlay}/>
                        <Dialog.Content className={styles.dialog}>
                            <NewTransactionForm/>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                
            </div>
            {transactions.length > 0 ? (transactions.map((transaction, index) => (
                    <div className={styles.listItemRectangle} key={index}>
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>{transaction.title}</p>
                        </div>
                        <div className={styles.dateAndAmountDiv}>
                            <p className={styles.data}>{transaction.date}</p>
                            {addTransactionIntoDOM(transaction)}
                        </div>
                        
                    </div>
                ))) : (
                    <p>Você ainda não possui transações registradas. Registre uma clicando em "Nova Transação"!</p>
                )
            }
        </div>

    )
}

export default TransactionsList