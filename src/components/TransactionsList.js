import styles from './TransactionsList.module.css'
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from './NewTransactionForm';
import {useState} from 'react'

const transactionsExample = [
    {
        id: '1234',
        category: 'Transação',
        title: 'Almoço muito gostoso que comi no ju com meu pai que fez churrasco',
        value: '-23.00',
        date: '29/11/2023',
    },
    {
        id: '12345',
        category: 'Transação',
        title: 'Salário',
        value: '300.00',
        date: '25/11/2023',
    },
]

function TransactionsList() {
    const [transactions, setTransactions] = useState(transactionsExample);

    function fecthTransactions() {
        setTransactions(transactionsExample)
    }
    // fecthTransactions()
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
            {transactions.map((transaction, index) => (
                    <div className={styles.listItemRectangle} key={index}>
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>{transaction.title}</p>
                        </div>
                        <div className={styles.dateAndValueDiv}>
                            <p className={styles.data}>{transaction.date}</p>
                            <p className={styles.value}>
                                {transaction.value > 0 ? `+R$ ${transaction.value}` : `-R$ ${transaction.value}` }
                            </p>
                        </div>
                        
                    </div>
                ))
            }
        </div>

    )
}

export default TransactionsList