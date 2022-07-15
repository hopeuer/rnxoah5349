import React from "react";

const profileDate = {
    apple:{//username
        name: '김사과',
        description: '학생, 착해요'
    },
    banana:{//username
        name: '반하나',
        description: '회사원, 잘해요'
    }
}

const Profile = ({match}) => {
    const {username} = match.params//username
    const profile = profileDate[username]

    if(!profile){
        return<div>존재하지 않는 프로필입니다</div>
    }


    return(
            {/* {예외처리} */}
           
        <div>
            <h2>{username}({profile.name})</h2>
            <p>{profile.description}</p>
        </div>

    )
}

export default Profile;