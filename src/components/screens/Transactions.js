import CurrentBalance from '../CurrentBalance.js'
import IncomeAndExpensesRectangle from '../IncomeAndExpensesRectangle.js'
import TransactionsList from '../TransactionsList.js'

function TransactionsScreen() {
    return (
        <>
            <div style={{padding:'20px'}}>
                <CurrentBalance balance='1.00'/>
                <IncomeAndExpensesRectangle income='0.00' expense='0.00'/>
                <TransactionsList/>
            </div>
        </>
    )
}

export default TransactionsScreen