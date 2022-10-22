
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
                <div className="level p-4 mb-0" style={{background:"rgb(256 , 255, 256)"}}>
                   <article class='level-left'>
                    <h1 className="level-item"><p className="content is-large ml-4">Sprint Work Sample</p></h1>
                    <p className="level-item"><i className="icon">{<FaBolt/>}</i></p>
                   </article>
                   <p className="level-right">
                    <span className="level-item mr-4"><Link to="/help">Help</Link></span>
                   </p>
                </div>
            <div className="columns mt-0">
            <div className="column" style={{backgroundColor:"white", display:"flex", justifyContent:"center"}}>
                <div className="box p-6" >
                    <div className="mb-6">
                        <p className="content subtitle is-large has-text-centered">Welcome back</p>
                        <p className="content is-small">
                        Get your projects done quickly with no delays
                        </p>
                    </div>
                <div class='form'>
                    <form onSubmit={onSubmit}>
                        <div className="field">
                            <label className="label" htmlFor="label">Email</label>
                            <div className="control">
                                <input className="input is-small" type="email"
                            placeholder="enter username" name='emailI' required/>
                            </div>
                            {emailWarning ? <span className="email-warning-danger"><p className="content is-small">{loginAlert.alert1}</p></span> : ""}
                        </div>
                        <div class='field'>
                            <label htmlFor="password" className="label">Password</label>
                            <p className="control has-icons-right">
                                <input className="input is-small" type="password"placeholder="enter password" name="passwordI" required/>
                                <i className="icon is-right "><strong>{<FaEye />}</strong></i>
                            </p>
                            {passwordWarning ? <span className="email-warning-danger"><p className="content is-small">{loginAlert.alert2}</p></span> : ""}
                        </div>
                        <div className="level">
                            <div className="level-left">
                                <div className="field level-item">
                                    <div className="control">
                                        <label className="checkbox level-item content is-small">
                                            <input type="checkbox" />
                                                Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="level-right">
                                <span className="level-item content is-small"><a className={`email-warning ${passwordWarning && 'email-warning-danger'}`} href="#">forgot password?</a></span>
                            </div>
                        </div>
                        <div class='field has-text-centered'>
                            <div className="control">
                                <Link to="/" className="button is-link" style={{width:'100%'}} type="submit">
                                    sign in
                                </Link>
                            </div>
                        </div>
                        {/* <div className="field has-text-centered">
                            <div className="control">
                                <button className="button has-icon-left is-active" style={{width:'100%'}}>
                                    <span className="icon is-left">
                                        <i>{<FaGoogle />}</i>
                                    </span>
                                    <p className="content is-small">sign in with Google</p>
                                </button>
                            </div>
                        </div> */}
                    </form>
                </div>
                    <div className="block mt-6 has-text-centered">
                        <span className="content is-small" >Don't have an account? <Link to="/register"><strong>sign up</strong></Link></span>
                    </div>
                </div>
            </div> 
            </div>
           </>
    )
}
export default Login;
