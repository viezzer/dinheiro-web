import styles from './CurrentBalance.module.css'
import PropTypes from 'prop-types'

function CurrentBalance({balance}) {
    return (
        <>
            <h2 className={styles.tituloSaldoAtual}>SALDO ATUAL</h2>
            <h1 className={styles.saldoAtual}>R$ {balance}</h1>
        </>
    )
}

CurrentBalance.propTypes = {
    balance: PropTypes.string,
}

CurrentBalance.defaultProps = {
    balance: '0.00'
}

export default CurrentBalance