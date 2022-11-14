import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';

export default function Itens() {
    return (
        <div className={styles.itens}>{
            cardapio.map(item=>(
                //duas formas de passar dependendo do sistema
                
                // <Item key={item.id}
                //     title={item.title}
                //     description={item.description}
                //     size={item.size}
                //     id={item.id}
                //     serving={item.serving}
                //     price={item.price}
                //     category={item.category}
                //     photo = {item.photo}
                // />
                <Item key={item.id} {...item}/>
            ))
        }</div>
    )
}