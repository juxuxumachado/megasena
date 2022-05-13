
export default function numerador(props){

       
       const contador = {
        margin:"10px",
        width:"50px",
        height:"50px",
        display:"flex",
        fontWeight:"bolder",
        color:"pink",
        backgroundColor:"purple",
        fontSize:"30px",
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:"50%",
        alignItems: "center",
    }
    
    return (
        
            <span style={contador}>{props.numeros}</span>
    )
}