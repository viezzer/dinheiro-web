import {useState, useEffect} from 'react'
import Switch from './SwitchDemo';
import styles from './NewTransactionForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const currentDate = new Date().toISOString().split('T')[0];

function NewTransactionForm({reloadTransactionsFromChildreen}) {
    const [isIncome, setIsIncome] = useState(true) 
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(currentDate)
    const [titlePlaceholder, setTitlePlaceholder] = useState('Salário, Serviço Prestado, etc...')

    function formValidate() {
        if(title.trim() < 3) {
            alert("Nome da transação deve conter no mínimo 3 caracteres.")
            return false
        } else {
            if(amount <= 0) {
                alert("Valor da transação inválido.")
                return false
            } else {
                return true
            }
        }
    }

    function createTransaction(e) {
        e.preventDefault();
    
        if (formValidate()) {
            const newTransaction = {
                "id": uuidv4(),
                "categorie": "",
                "title": title,
                "amount": isIncome ? amount : -amount,
                "date": date
            };
    
            // Get existing transactions from local storage or initialize an empty array
            const existingTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
            // Add the new transaction to the array
            existingTransactions.push(newTransaction);
    
            // Save the updated transactions array back to local storage
            localStorage.setItem('transactions', JSON.stringify(existingTransactions));
    
            setTitle("");
            setAmount("");
            reloadTransactionsFromChildreen();
        }
    }
    

    return (
        <>
            <h2>Nova transação</h2>
            <form className={styles.form} onSubmit={createTransaction}>
                <label className={styles.label}>Tipo da transação</label>
                <small>Receita para valor que entrou na sua conta. Despesa para valor que saiu da sua conta. </small>
                <div className={styles.switchDiv}>
                    <Switch 
                        setIsIncome={setIsIncome} 
                        setTitlePlaceholder={setTitlePlaceholder} 
                        isIncome={isIncome}/>
                </div>
                
                <label htmlFor='title' className={styles.label}>Nome</label>
                <input 
                    id='title'
                    name="title"
                    className={styles.inputText} 
                    type="text" 
                    placeholder={titlePlaceholder}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor='amount' className={styles.label}>Valor</label>
                <input 
                    id='amount'
                    name='amount'
                    className={styles.inputText} 
                    type="number" 
                    placeholder="0.00"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}    
                />
                <label htmlFor='date' className={styles.label}>Data da transação</label>
                <input 
                    id='date'
                    name='date'
                    className={styles.inputText}
                    type='date'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />

                <input className={styles.inputSubmit} type='submit'></input>
            </form>
        </>
    )
}

export default NewTransactionForm;