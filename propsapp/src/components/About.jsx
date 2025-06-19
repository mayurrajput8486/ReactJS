
const About = ({info, moreInfo}) => {
  return (
    <div>
        <h2>About</h2>
        <p>{info}</p>
        <p>{moreInfo.devName} - {moreInfo.company} - {moreInfo.year}</p>
    </div>
  )
}

export default About