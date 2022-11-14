import styles from "./Item.module.scss";
import logo from "assets/logo.svg";
import cardapio from "../itens.json"

type IItem = typeof cardapio[0];

export default function Item({ title, description, size, id, serving, price, category, photo }: IItem) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.item__tags}>
                <div className={styles.item__tipo} key={category.id}>
                    {category.label}
                </div>
                <div className={styles.item__porcao}>
                    {size}g
                </div>
                <div className={styles.item__qtdpessoas}>
                    Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
                </div>
                <div className={styles.item__valor}>
                    R$ {price.toFixed(2)}
                </div>
            </div>
        </div>
    )
}