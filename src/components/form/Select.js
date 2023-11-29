import styles from './Select.module.css'

function Select({text, name, options, handleOnChange}) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange}>
                <option value="">Selecione uma opção</option>
                {options.map((categorie) => (
                    <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;