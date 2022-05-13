import { sortear } from "../funcoes/sortear";
import Numerador from "../componentes/numerador";
import { useState } from "react";


export default function numerossorteados(){

const [sorte, setSorte]=useState(6)
const [sorteados, setSorteados]=useState("")

    function num(){
        const tmp=[]
        const numerador=sortear(sorte)
        for ( let i=0 ;i <= sorte-1; i++){
            tmp.push(<Numerador key={i} numeros={numerador[i]}></Numerador>)
        }
        setSorteados(tmp)
    }


    return(
       
        <div >
            <input type="number" min={6} max={15} value={sorte} onChange={e=>setSorte(e.target.value)}/>
            <button onClick={num}>Gerar Sorteio</button>
            <div style={{
            display:'flex',
            justifyContent:'center',
            flexWrap:"wrap"
        }}>{sorteados}</div>
        </div>
    )

}
