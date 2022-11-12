import styles from './Filtros.module.scss';
import filtros from './filtros.json';

//duas formas de tipar opcao

type IOpcao = typeof filtros[0];

// interface Opcao{
//     id:number,
//     label:string,
// }

export default function Filtros(){

    function selecionarFiltro(opcao:IOpcao){ 

    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao)=>(
                <button className={styles.filtos__filtro} key={opcao.id} onClick={()=>selecionarFiltro(opcao)}>   
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}