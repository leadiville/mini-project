
import { Link } from "react-router-dom";
import { FaBolt, FaEye, FaGoogle} from "react-icons/fa"
import "../index.css";
import { useState } from "react";

const Login = () => {
    const [emailWarning, setEmailWarning] = useState(false)
    const [passwordWarning, setPasswordWarning] = useState(false)
    const loginAlert = {alert1:"invalid username or email", alert2: "incorrect password"}
    const userEntry = [{email:"bboybarry1@gmail.com", password:"aa"},{email:"leadiville@yahoo.com", password: "as"}]
    
    const onSubmit = (e) => { 
        // get the email that passes
        e.preventDefault();
        const {emailI, passwordI} = document.forms[0]
        const correctEmail = userEntry.find((each) => each.email === emailI.value)       
        if(correctEmail) {
            if(correctEmail.password !== passwordI.value) {
                setPasswordWarning(true)
            } else {
                setPasswordWarning(false)
            }
        } else {
            setEmailWarning(true)
        }
    }


    return (
           <>
                <div class="level p-4 mb-0" style={{background:"rgb(256 , 255, 256)"}}>
                   <article class='level-left'>
                    <h1 class="level-item"><p class="content is-large ml-4">Sprint Work Sample</p></h1>
                    <p class="level-item"><i class="icon">{<FaBolt/>}</i></p>
                   </article>
                   <p class="level-right">
                    <span class="level-item mr-4"><Link to="/help">Help</Link></span>
                   </p>
                </div>
            <div class="columns mt-0">
            <div class="column" style={{backgroundColor:"white", display:"flex", justifyContent:"center"}}>
                <div class="box p-6" >
                    <div class="mb-6">
                        <p class="content subtitle is-large has-text-centered">Welcome back</p>
                        <p class="content is-small">
                        Get your projects done quickly with no delays
                        </p>
                    </div>
                <div class='form'>
                    <form onSubmit={onSubmit}>
                        <div class="field">
                            <label class="label" htmlFor="label">Email</label>
                            <div class="control">
                                <input class="input is-small" type="email"
                            placeholder="enter username" name='emailI' required/>
                            </div>
                            {emailWarning ? <span className="email-warning-danger"><p class="content is-small">{loginAlert.alert1}</p></span> : ""}
                        </div>
                        <div class='field'>
                            <label htmlFor="password" class="label">Password</label>
                            <p class="control has-icons-right">
                                <input class="input is-small" type="password"placeholder="enter password" name="passwordI" required/>
                                <i class="icon is-right "><strong>{<FaEye />}</strong></i>
                            </p>
                            {passwordWarning ? <span className="email-warning-danger"><p class="content is-small">{loginAlert.alert2}</p></span> : ""}
                        </div>
                        <div class="level">
                            <div class="level-left">
                                <div class="field level-item">
                                    <div class="control">
                                        <label class="checkbox level-item content is-small">
                                            <input type="checkbox" />
                                                Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="level-right">
                                <span class="level-item content is-small"><a className={`email-warning ${passwordWarning && 'email-warning-danger'}`} href="#">forgot password?</a></span>
                            </div>
                        </div>
                        <div class='field has-text-centered'>
                            <div class="control">
                                <Link to="/" class="button is-link" style={{width:'100%'}} type="submit">
                                    sign in
                                </Link>
                            </div>
                        </div>
                        {/* <div class="field has-text-centered">
                            <div class="control">
                                <button class="button has-icon-left is-active" style={{width:'100%'}}>
                                    <span class="icon is-left">
                                        <i>{<FaGoogle />}</i>
                                    </span>
                                    <p class="content is-small">sign in with Google</p>
                                </button>
                            </div>
                        </div> */}
                    </form>
                </div>
                    <div class="block mt-6 has-text-centered">
                        <span class="content is-small" >Don't have an account? <Link to="/register"><strong>sign up</strong></Link></span>
                    </div>
                </div>
            </div> 
            </div>
           </>
    )
}
export default Login;
