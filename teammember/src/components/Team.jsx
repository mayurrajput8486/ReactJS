import MemberCard from "./MemberCard"
const Team = ({members}) => {
  return (
    <div style={{display : "flex", justifyContent : "space-evenly"}}>
        {
            members.map((member,index)=>{
                return(
                    <MemberCard
                        key = {index}
                        memberPic = {member.avatar}
                        fullName = {member.name}
                        memberRole = {member.role}
                        techSkills = {member.skills}

                    />
                )
            })
        }
    </div>
  )
}

export default Team