import styles from "./Item.module.scss";
import logo from "assets/logo.svg";
import cardapio from "../itens.json"

type IItem = typeof cardapio[0];

export default function Item({ title, description, size, id, serving, price, category }: IItem) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
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
                    `O tamanho da porção é ${size}`
                </div>
                <div className={styles.item__qtdpessoas}>
                    `Serve ${serving} pessoa(s)`
                </div>
                <div className={styles.item__valor}>
                    `O valor é R$ ${price} reais`
                </div>
            </div>
        </div>
    )
}