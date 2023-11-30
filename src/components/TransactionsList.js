import styles from './TransactionsList.module.css'

function TransactionsList({transactions, handleDelete}) {

    

    function formatAmount(transaction) {
        const operator = transaction.amount < 0 ? "-" : "+"
        const CSSclass = transaction.amount < 0 ? styles.minus : styles.plus
        const amountWithoutOperator = Math.abs(transaction.amount).toFixed(2)
    
        return <span className={CSSclass}>{operator} R$ {amountWithoutOperator}</span>
    };

    function formatDate(transaction) {
        const [year,month,day] = transaction.date.split("-");
        const formatedDate = `${day}/${month}/${year}` 
        return <p className={styles.data}>{formatedDate}</p>
    }

    return (
        <div className={styles.container}>
            {transactions ? (transactions.map((transaction, index) => (
                    <div className={styles.listItemRectangle} key={index} onClick={() => {handleDelete(transaction.id, transaction.title)}}>
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>{transaction.title}</p>
                        </div>
                        <div className={styles.dateAndAmountDiv}>
                            {formatDate(transaction)}
                            <p>
                                {formatAmount(transaction)}
                            </p>
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