import { useState } from "react";

function UserForms({show, setShow, currentUser, setCurrentUser}){
    const [logged, setLogged] = useState(false)  
    const userUrl = "http://localhost:4000/users"
    const [input , setInput] = useState({
        "username" : "",
        "password" : "",
        })

    
    function formFill(e){
        setInput({...input,
        [e.target.name]:e.target.value})
        
    }    
    
    function newUser(e){
        e.preventDefault()
        fetch(userUrl,{
            method : 'POST',
            headers :{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(input)
            })
        .then(res=>res.json)
        .then(data =>console.log(data))
        e.target.reset()
        setShow(!show)
        

    }
    function logIn(e){
        e.preventDefault()
    fetch(userUrl)
    .then(res=>res.json())
    .then(users => {
        const user = users.filter((user)=> user.username == input.username)
        setCurrentUser(user)
        setLogged(true)
        // user.password === input.password? setCurrentUser(user) : alert("Password does not Match")
    } )
    
    }
    console.log(currentUser)
    if (logged){
        return(
            <>
        <h4>Welcome, {input.username}</h4>
        
        </>
        )}
    if (show){
        return (
            <form onSubmit={(e)=>newUser(e)}>
                <input type='text' name='username' placeholder='New Username' onChange={(e)=> formFill(e)}/>
                <input type='text' name='password' placeholder='NewPassword'onChange={(e)=> formFill(e)}/>
                <input type='submit' />
            </form>
        )
    }
    return (
    
    <form onSubmit={(e)=>logIn(e)}>
        <input type='text' name='username' placeholder='Input Username'onChange={(e)=> formFill(e)}/>
        <input type='text' name='password' placeholder='Input Password'onChange={(e)=> formFill(e)}/>
        <input type='submit'/>
    </form>

    )


}

export default UserForms