import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"

const SignUp = () => {
    const registeredAcc = [{email:"bboybarry1@gmail.com"},{email:"leadiville@yahoo.com"}]
    const alert = {
        email:"email has already been registered",
        password:"password must be more than 4 characters"
    }
    const [passAlert, setPassAlert] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
            const {emailV, passwordV} = document.forms[0]
            const alreadyReg = registeredAcc.find((each)=> each.email === emailV.value)

            if(alreadyReg) {
                if(passwordV.value.length <= 4) {
                    setPassAlert(true)
                } else {
                    setPassAlert(false)
                }
            } else {
                setPassAlert(false)
            }
    }

    return (
       <>
        <p className="content is-small p-0 m-0 ml-2">Already have an account? <Link to="/register/login">Sign in</Link></p>
        <div className="columns is-vcentered is-gapless mobile">
            <div className="column" style={{backgroundColor:"white"}}>
                <div className="container" style={{ maxWidth:"300px"}}>
                    <div className="block mb-6">
                        <p className="title is-small">Sprint Work Sample</p>
                        <p className="content is-small">
                        Get your projects done quickly with no delays</p>
                    </div>
                    <form onSubmit={onSubmit} >
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input is-small" type="email" 
                                    placeholder="choose username" name="emailV" required/>
                                </div>
                        </div>
                        <div class='field'>
                            <label htmlFor="password" className="label">Password</label>
                            <div className="control">
                                <input className="input is-small" type="password"
                                    placeholder="choose password" name="passwordV" required />
                            </div>
                            {passAlert && <span className="content is-small"><p className="email-warning-danger">{alert.password}
                            </p></span>}
                        </div>
                    
                        <div class='field mb-3'>
                            <div className="control">
                                {<Link to="/"><button class='button is-link'>sign up</button></Link>}
                            </div>
                        </div>
                        {/* <div className="field">
                            <div className="control">
                                <button className="button has-icon-left is-active mt-4" style={{width:'100%'}}>
                                    <i className="icon is-left">{<FaGoogle />}</i>
                                    <span className="content is-small">Sign up with google</span>
                                </button>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>    
            <div className="column" style={{height:"768px", backgroundColor:"blue", flexDirection:"column", display:"flex", justifyContent:"center"}}>
                <div className="content mt-2">
                    <h1 className="title is-capitalized" style={{width:"130px", color:"white", lineHeight:"2.5em", marginLeft:"auto", marginRight:"auto"}}>get sprints done quickly</h1>
                </div>
            </div>
        </div>
       </>
        )
    }
    export default SignUp;