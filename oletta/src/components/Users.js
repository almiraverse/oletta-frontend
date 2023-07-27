import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'


export default function Users() {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get("api/users/list/")
            .then(res => {
                console.log("user profiles are:")
                console.log(res.data)
                setAllUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // let i = 1
    let [i, setI] = useState(1)


    const votedNo = () => {
        console.log("User voted no")
        setI(i += 1)
        console.log("i is now", i)

    }

    const votedYes = () => {
        console.log("User voted yes")
        setI(i += 1)
        console.log("i is now", i)
        //axios post to backend token of your logged in user
        // id of liked user
        // axios.post('api/users/{i}/update')
        // .then()
        // .catch(err =>{
        //     console.log(err)

        // })
    }

    console.log("i is noyyyw", i)

    // console.log(allUsers)

    return (
        <div className='userCardComponent'>
            <div>
            {allUsers.map((user) => {

                console.log("i in map is now", i)

                if (user.id == i) {
                    return (
                        <div className='usercard' key={user.id}>
                            <div className='card-content'>
                                <div><img src={user.profile_photo} /></div>
                                <h1>Hi, I'm {user.first_name} !</h1>
                                <div><h2>@{user.username}</h2></div>
                                <div><p className='nativelang'>Native Language: <br /> <em>{user.native_language}</em></p></div>
                                <div><p className='interestedin'>Interested in Learning: <br /> <em>{user.interested_language}</em></p></div>
                            </div>
                        </div>
                    )
                }
                if (i > allUsers.length) {
                    //from here 
                    return (
                        <div className='usercard-End'>
                            <h3>Oops!</h3>
                            <h4>Nothing else left to show.</h4>
                        </div>
                    )
                    // to here, change this to navigate/redirect to a blank page or similar
                }

            })}
            </div>

            <div className='matchSelectionBtns'>
                <img className='noVote' src={require('../images/no (1).png')} onClick={votedNo} />
                <img className='yesVote' src={require('../images/positive-vote.png')} onClick={votedYes} />
            </div>

        </div>
    )
}
