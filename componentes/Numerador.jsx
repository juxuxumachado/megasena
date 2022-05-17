
export default function numerador(props){

       
       const contador = {
        margin:"10px",
        width:"80px",
        height:"80px",
        display:"flex",
        fontWeight:"bolder",
        color:"black",
        backgroundColor:"purple",
        fontSize:"50px",
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:"50%",
        alignItems: "center",
    }
    
    return (
        
            <span style={contador}>{props.numeros}</span>
    )
}