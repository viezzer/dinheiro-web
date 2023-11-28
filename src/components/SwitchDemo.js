import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './SitchDemo.module.css'

function SwitchDemo() {
    return (
        <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'row'}}>
            <p className={styles.incomeText}>Receita</p>
            <Switch.Root className={styles.SwitchRoot} id="isIncome">
                <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <p className={styles.expenseText}>Despesa</p>
        </div>
    ) 
}

export default SwitchDemo;