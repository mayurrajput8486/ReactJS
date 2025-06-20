import './MemberCard.css'
const MemberCard = ({memberPic, fullName, memberRole, techSkills}) => {
  return (
    <div className="cards">
        <img src={memberPic} alt={fullName} style={{width : "100%", height: "250px", borderRadius: "25px"}}/>
        <h2>{fullName}</h2>
        <h3>{memberRole}</h3>
        <h4>Skills - </h4>
        <ul>
            {
                techSkills.map((tech,index)=>{
                    return(
                        <li key={index}>{tech}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default MemberCard