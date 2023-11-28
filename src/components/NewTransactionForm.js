import {useState} from 'react'
import Switch from './SwitchDemo';
import styles from './NewTransactionForm.module.css';

function NewTransactionForm() {
    const [isIncome, setIsIncome] = useState(true) 
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [titlePlaceholder, setTitlePlaceholder] = useState('Salário, Serviço Prestado, etc...')

    function handleCreateNewTransaction(e) {
        e.preventDefault()
        console.log(isIncome)
        console.log(title)
        console.log(amount)
        console.log(date)
    }

    return (
        <>
            <h2>Nova transação</h2>
            <form className={styles.form} onSubmit={handleCreateNewTransaction}>
                <label className={styles.label}>Tipo da transação</label>
                <small>Receita para valor que entrou na sua conta. Despesa para valor que saiu da sua conta. </small>
                <div className={styles.switchDiv}>
                    <Switch 
                        setIsIncome={setIsIncome} 
                        setTitlePlaceholder={setTitlePlaceholder} 
                        isIncome={isIncome}/>
                </div>
                {/* <label className={styles.label}>Categoria da transação</label>
                <select className={styles.inputText}>
                    <option value="">Transação</option>
                    <option value="opcao1">Alimentação</option>
                    <option value="opcao2">Transporte</option>
                    <option value="opcao3">Lazer</option>
                </select> */}

                
                <label htmlFor='title' className={styles.label}>Nome</label>
                <input 
                    id='title'
                    name="title"
                    className={styles.inputText} 
                    type="text" 
                    placeholder={titlePlaceholder}
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                />
                <label htmlFor='amount' className={styles.label}>Valor</label>
                <input 
                    id='amount'
                    name='amount'
                    className={styles.inputText} 
                    type="number" 
                    placeholder="0.00"
                    onChange={(e) => {setAmount(e.target.value)}}
                    value={amount}    
                />
                <label htmlFor='date' className={styles.label}>Data da transação</label>
                <input 
                    id='date'
                    name='date'
                    className={styles.inputText}
                    type='date'
                    onChange={(e) => {setDate(e.target.value)}}
                    value={date}
                />

                <input className={styles.inputSubmit} type='submit'></input>
            </form>
        </>
    )
}

export default NewTransactionForm;