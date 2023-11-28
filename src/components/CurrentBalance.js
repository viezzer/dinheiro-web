import styles from './CurrentBalance.module.css'

function CurrentBalance({balance}) {
    return (
        <div style={{textAlign:'center'}}>
            <h2 className={styles.tituloSaldoAtual}>SALDO ATUAL</h2>
            <h1 className={styles.saldoAtual}>R$ {balance}</h1>
        </div>
    )
}

export default CurrentBalance