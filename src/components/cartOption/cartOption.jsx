import Image from 'next/image'

import styles from './cartOption.module.css'

export default function CartOption({ image, title, price, onRemove }) {
    return (
        <div className={styles.option}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74} />
            console.log(image)
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.price}>R${price}</h3>
                <p className={styles.remove} onClick={onRemove}>remover</p>
            </div>
        </div>
    )
}