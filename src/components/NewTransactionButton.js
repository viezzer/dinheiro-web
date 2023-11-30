import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from './NewTransactionForm';
import { FaCirclePlus } from "react-icons/fa6";
import styles from './NewTransactionButton.module.css'

function NewTransactionButton({reloadFatherCallback}) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className={styles.newTransactionButton}>
                <FaCirclePlus/> <p style={{marginLeft: '5px'}}>Nova Transação</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay}/>
                <Dialog.Content className={styles.dialog}>
                    <NewTransactionForm reloadTransactionsFromChildreen={reloadFatherCallback}/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default NewTransactionButton;