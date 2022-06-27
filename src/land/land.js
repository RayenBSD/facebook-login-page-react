import "./land.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

import { useState } from "react";

const Land = () => {

    //hs == hide show
    const [hs, seths] = useState("password");
    const hideShowPassword = () => {
        (hs === "text") ? seths("password") : seths("text");
    }

    return (
        <article id="land">
            <section>
                <div>
                    <h1>facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>
                <div>
                    <form>
                        <div>
                            <input placeholder="Email or phone number" type="text"/>
                        </div>
                        <div>
                            <input placeholder="Password" type={hs}/>
                            {/*<button onClick={hideShowPassword}>
                                {(hs === "password") ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                            </button>*/}
                        </div>
                        <div className="Log-In">
                            <a href="#" type="button">Log In</a>
                        </div>
                        <div className="Forgot-password">
                            <a href="#">Forgot password?</a>
                            
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className="Create-new-account">
                            <a href="#" type="button">Create new account</a>
                        </div>
                    </form>
                    <div>
                        <p><a href="#">Create a Page</a> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default Land;