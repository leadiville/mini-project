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
        <p class="content is-small p-0 m-0 ml-2">Already have an account? <Link to="/register/login">Sign in</Link></p>
        <div class="columns is-vcentered is-gapless mobile">
            <div class="column" style={{backgroundColor:"white"}}>
                <div class="container" style={{ maxWidth:"300px"}}>
                    <div class="block mb-6">
                        <p class="title is-small">Sprint Work Sample</p>
                        <p class="content is-small">
                        Get your projects done quickly with no delays</p>
                    </div>
                    <form onSubmit={onSubmit} >
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input is-small" type="email" 
                                    placeholder="choose username" name="emailV" required/>
                                </div>
                        </div>
                        <div class='field'>
                            <label htmlFor="password" class="label">Password</label>
                            <div class="control">
                                <input class="input is-small" type="password"
                                    placeholder="choose password" name="passwordV" required />
                            </div>
                            {passAlert && <span class="content is-small"><p className="email-warning-danger">{alert.password}
                            </p></span>}
                        </div>
                    
                        <div class='field mb-3'>
                            <div class="control">
                                {<Link to="/"><button class='button is-link'>sign up</button></Link>}
                            </div>
                        </div>
                        {/* <div class="field">
                            <div class="control">
                                <button class="button has-icon-left is-active mt-4" style={{width:'100%'}}>
                                    <i class="icon is-left">{<FaGoogle />}</i>
                                    <span class="content is-small">Sign up with google</span>
                                </button>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>    
            <div class="column" style={{height:"768px", backgroundColor:"blue", flexDirection:"column", display:"flex", justifyContent:"center"}}>
                <div class="content mt-2">
                    <h1 class="title is-capitalized" style={{width:"130px", color:"white", lineHeight:"2.5em", marginLeft:"auto", marginRight:"auto"}}>get sprints done quickly</h1>
                </div>
            </div>
        </div>
       </>
        )
    }
    export default SignUp;