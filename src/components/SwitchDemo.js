import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './SitchDemo.module.css'

function SwitchDemo({setIsIncome, setTitlePlaceholder, isIncome}) {

    function handleSwitch() {
        if(isIncome){
            //muda para despesa
            setIsIncome(false)
            setTitlePlaceholder('Almoço, Mercado, etc...')
        } else {
            //muda para receita
            setIsIncome(true)
            setTitlePlaceholder('Salário, Serviço Prestado, etc...')
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'row'}}>
            <p className={styles.incomeText}>Receita</p>
            <Switch.Root className={styles.SwitchRoot} id="isIncome" onClick={handleSwitch}>
                <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <p className={styles.expenseText}>Despesa</p>
        </div>
    ) 
}

export default SwitchDemo;