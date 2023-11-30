import CurrentBalance from '../CurrentBalance.js'
import IncomeAndExpensesRectangle from '../IncomeAndExpensesRectangle.js'
import TransactionsList from '../TransactionsList.js'
import NewTransactionButton from '../NewTransactionButton.js'
import {useState, useEffect} from 'react'
import styles from './Transactions.module.css';

function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [balance, setBalance] = useState(0)
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    function fetchTransactions() {
        // Get transactions from local storage or initialize an empty array
        const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
        // Reverse the array if needed
        setTransactions(storedTransactions.reverse());
    }
    

    function handleDeleteTransaction(ID, title) {
        const shouldDelete = window.confirm(`Tem certeza de que deseja excluir "${title}"`);
        if(shouldDelete){
            const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
            const storedTransactionsWithoutDeletedOne = storedTransactions.filter(function(transaction){
                if(transaction.id!==ID) {
                    return transaction;
                }
                return false
            })
            // Save the updated transactions array back to local storage
            localStorage.setItem('transactions', JSON.stringify(storedTransactionsWithoutDeletedOne));
            setTransactions(storedTransactionsWithoutDeletedOne)
            
        }
    }

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
                return value > 0
            })
            .reduce(function(accumulator, value) {
                return accumulator + value
            }, 0)
            .toFixed(2)

        const expense = Math.abs(transactionsAmounts
            .filter(function(value){
                return value < 0 
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
        fetchTransactions();
    },[]);

    useEffect(() => {
        updateBalanceValue();
    }, [transactions]);


    return (
        <div className={styles.container}>
            <CurrentBalance balance={balance}/>
            <IncomeAndExpensesRectangle income={income} expense={expense}/>

            <div className={styles.header}>
                <p className={styles.headerTitle}>Transações</p>
                <NewTransactionButton reloadFatherCallback={fetchTransactions}/>
            </div>
            <TransactionsList transactions={transactions} handleDelete={handleDeleteTransaction} />
        </div>
    )
}

export default Transactions