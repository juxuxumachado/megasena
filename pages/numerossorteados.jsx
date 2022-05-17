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
       
    
        <div style={{ display:"flex", flexDirection:"column",justifyContent:"center",alignItems: "center"}}>
            <div style={{
                    display:'flex',
                    justifyContent:'center',
                    flexWrap:"wrap",
                    alignItems: 'center',
                    fontSize:'50PX',
                    backgroundColor:'purple',
                    fontWeight:'bolder',
                    width:'60%'
                     }}>MEGA SENA</div>
            
    
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    flexWrap:"wrap",
                    alignItems: 'center',
                    height: '70vh' ,
                    width:"60%" }}>{sorteados}
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    flexWrap:"wrap",
                    alignItems: 'center',
                    fontSize:'50PX',
                    backgroundColor:'purple',
                    width:'60%'
                     }}>
                        <input style={{fontSize:'25px',textAlign:'center'}} type="number" min={6} max={15} value={sorte} onChange={e=>setSorte(e.target.value)}/>
                        <button style={{fontSize:'25px'}}  onClick={num}>Gerar Sorteio</button>
                     </div>
                
        </div>
    )

}
