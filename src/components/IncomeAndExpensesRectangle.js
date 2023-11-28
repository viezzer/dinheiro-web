import styles from './IncomeAndExpensesRectangle.module.css'

function IncomeAndExpensesRectangle({expense, income}) {
    return(
        <div className={styles.rectangle}>
            <div className={styles.incomeRectangle}>
                <p className={styles.label}>RECEITAS</p>
                <p className={styles.income}>R$ {income}</p>
            </div>
            <div className={styles.expenseRectangle}>
                <p className={styles.label}>DESPESAS</p>
                <p className={styles.expense}>R$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpensesRectangle