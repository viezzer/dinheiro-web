import styles from './TransactionsList.module.css'


function TransactionsList({transactions, setTransactions}) {

    function handleDeleteTransaction(ID) {
        const shouldDelete = window.confirm('Tem certeza de que deseja excluir esta transação?');
        if(shouldDelete){
            setTransactions(
                transactions.filter(function(transaction){
                    if (transaction.id !== ID) {
                        return transaction
                    }
                    return false
            }))
            return true
        }
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

    function formatDate(transaction) {
        const [year,month,day] = transaction.date.split("-");
        const formatedDate = `${day}/${month}/${year}` 
        return <p className={styles.data}>{formatedDate}</p>
    }

    return (
        <div className={styles.container}>
            {transactions ? (transactions.map((transaction, index) => (
                    <div className={styles.listItemRectangle} key={index}>
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>{transaction.title}</p>
                        </div>
                        <div className={styles.dateAndAmountDiv}>
                            {formatDate(transaction)}
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