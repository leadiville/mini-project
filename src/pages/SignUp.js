import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"


const SignUp = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [message, setMessage] = useState({warning:"please enter a valid email address", success:"email address valid"})

    return (
        <div class="columns is-vcentered is-gapless mobile">
            <div class="column" style={{backgroundColor:"white"}}>
                <strong>
                    <p class="content is-small" style={{position:"absolute", top: 40, left: 160,}}>Already have an account? <Link to="/login">Sign in</Link></p>
                </strong>
                <div class="container" style={{ maxWidth:"300px"}}>
                    <div class="block mb-6">
                        <p class="title is-small">Sprint Work Sample</p>
                        <p class="content is-small">
                        Get your projects done quickly with no delays
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input name="email" class="input is-small" type="email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} placeholder="choose username" />
                            <span class="content is-small is-warning"><p>{message.warning}</p></span>
                        </div>
                    </div>
                    <p class='field'>
                        <label htmlFor="password" class="label">Password</label>
                        <div class="control">
                            <input name="password" class="input is-small is-danger" type="password" value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)} placeholder="choose password" />
                        </div>
                    </p>
                   
                    <div class='field has-text-centered'>
                        <div class="control">
                            <Link to="/login" class="button is-link" style={{width:'100%'}} ><p class="content is-small">sign up</p></Link>
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <div class="control">
                            <button class="button has-icon-left is-active mt-4" style={{width:'100%'}}>
                                <i class="icon is-left">{<FaGoogle />}</i>
                                <p class="content is-small is-cp">Sign up with google</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="column" style={{height:"768px", backgroundColor:"blue", flexDirection:"column", display:"flex", justifyContent:"center"}}>
                <div class="content mt-2">
                    <h1 class="title is-capitalized" style={{width:"130px", color:"white", lineHeight:"2.5em", marginLeft:"auto", marginRight:"auto"}}>get sprints done quickly</h1>
                </div>
            </div>
        </div>
        )
    }
    export default SignUp;