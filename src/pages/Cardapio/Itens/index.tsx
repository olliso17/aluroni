import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

interface Props {
    busca: string;
    ordenador: string;
    filtro: number | null;
}

export default function Itens({ busca, ordenador, filtro }: Props) {
    const [lista, setLista] = useState(cardapio);


    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true;
    }
    function ordenar(novaLista: typeof cardapio) {
        switch (ordenador) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return novaLista
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [busca, filtro, ordenador])

    return (
        <div className={styles.itens}>{
            lista.map(item => (
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
                <Item key={item.id} {...item} />
            ))
        }</div>
    )
}