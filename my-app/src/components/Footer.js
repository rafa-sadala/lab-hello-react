
function Footer(props){
    console.log(props)
    return(
        <div className='FooterImg'>
            <img classname='ImgFooter' src={props.img} alt='declarative'></img>
            <h2 classname='Texto'>{props.title}</h2>
            <p classname='text'> {props.text}</p>
        </div>
    )
}
export default Footer

