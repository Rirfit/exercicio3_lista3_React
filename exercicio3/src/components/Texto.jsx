function Texto(props){
    let isVisible = props.visivel

    if(isVisible){
        return (
            <p>Paragrafo visivel</p>
        )
    }
}export default Texto