const About = () =>{
    const myStyle = {
        color : 'orange',
        backgroundColor : 'black',
        padding : '10px',
        textAlign : 'center',
        borderRadius : '10px',
        marginTop : '10px'

    }
    return(
        <div style={myStyle}>
            <h2>I am About Comp</h2>
            <label htmlFor="firstName">First Name - </label>
            <input type="text" id="firstName"/>
        </div>
    )
}
export default About;