import styles from './TransactionsList.module.css'

function TransactionsList() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.headerTitle}>Transações</p>
                <button className={styles.newTransactionButton}>Nova Transação</button>
            </div>
            <div className={styles.listItemRectangle}>
                <div className={styles.titleDiv}>
                    <p className={styles.title}>Titulo da transação muito longo será que quebra?</p>
                </div>
                <div className={styles.dateAndValueDiv}>
                    <p className={styles.data}>00/00/0000</p>
                    <p className={styles.value}>+ R$ 1000.00</p>
                </div>
                
            </div>
        </div>

    )
}

export default TransactionsList