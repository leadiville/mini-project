import { Link } from "react-router-dom";
import {FaGoogle} from "react-icons/fa"
import "../index.css";

const Login = () => {
    
    return (
        <div class="columns is-vcentered is-gapless is-mobile">
            <div class="column" style={{backgroundColor:"white", display:'flex', justifyContent:"center" }}>
                <div class="container" style={{ maxWidth:"300px"}}>
                    <div class="mb-6">
                        <p class="title is-small">Welcome back</p>
                        <p class="content is-small">
                        Get your projects done quickly with no delays
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-small" type="email" value="" onChange={(e)=>e.target.value} placeholder="enter username" />
                        </div>
                    </div>
                    <div class='field'>
                        <label htmlFor="password" class="label">Password</label>
                        <p class="control">
                            <input class="input is-small is-danger" type="password" value="" onChange={(e)=>e.target.value} placeholder="enter password" />
                        </p>
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
                            <span class="level-item content is-small"><Link to="/forgotPassword">forgot password?</Link></span>
                        </div>
                    </div>
                    <div class='field has-text-centered'>
                        <div class="control">
                            <Link to="/username" class="button is-link" style={{width:'100%'}} ><p class='content is-small'>sign in</p></Link>
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <div class="control">
                            <button class="button has-icon-left is-active" style={{width:'100%'}}>
                                <span class="icon is-left">
                                    <i>{<FaGoogle />}</i>
                                </span>
                                <p class="content is-small">sign in with Google</p>
                            </button>
                        </div>
                    </div>
                    <div class="block mt-6 has-text-centered">
                        <span class="content" >Don't have an account? <Link to="/"><strong>sign up</strong></Link></span>
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
export default Login;
