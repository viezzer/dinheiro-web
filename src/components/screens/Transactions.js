import CurrentBalance from '../CurrentBalance.js'
import IncomeAndExpensesRectangle from '../IncomeAndExpensesRectangle.js'
import TransactionsList from '../TransactionsList.js'
import {useState, useEffect} from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from '../NewTransactionForm';
import { FaCirclePlus } from "react-icons/fa6";
import styles from './Transactions.module.css'

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

function Transactions() {
    const [transactions, setTransactions] = useState(transactionsExample)
    const [balance, setBalance] = useState(0)
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    function updateBalanceValue() {
        const transactionsAmounts = transactions.map(function(transaction) {
            return parseFloat(transaction.amount)
        })

        const total = transactionsAmounts  
            .reduce(function(accumulator, transaction){
                return accumulator + transaction
            }, 0)  
            .toFixed(2)

        const income = transactionsAmounts
            .filter(function(value) {
                if (value > 0) {return value}
            })
            .reduce(function(accumulator, value) {
                return accumulator + value
            }, 0)
            .toFixed(2)

        const expense = Math.abs(transactionsAmounts
            .filter(function(value){
                if (value < 0) {return value}
            })
            .reduce(function(accumulator, value){
                return accumulator + value
            }, 0))
            .toFixed(2)
    
        setBalance(total)
        setIncome(income)
        setExpense(expense)
    };

    useEffect(() => {
        updateBalanceValue();
    }, [transactions]);

    return (
        <div className={styles.container}>
            <CurrentBalance balance={balance}/>
            <IncomeAndExpensesRectangle income={income} expense={expense}/>

            <div className={styles.header}>
                <p className={styles.headerTitle}>Transações</p>
                <Dialog.Root>
                    <Dialog.Trigger className={styles.newTransactionButton}>
                        <FaCirclePlus/> <p style={{marginLeft: '5px'}}>Nova Transação</p>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className={styles.dialogOverlay}/>
                        <Dialog.Content className={styles.dialog}>
                            <NewTransactionForm/>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                
            </div>
            <TransactionsList transactions={transactions} setTransactions={setTransactions}/>
        </div>
    )
}

export default Transactions