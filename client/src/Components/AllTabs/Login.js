import React from "react";

const Login = ({id, setLoggedIn}) => {
    return (
        <div className="Login" >
            <form>
                <fieldset>
                    <label>
                        <p>First Name</p>
                        <input FirstName="FirstName" />
                    </label>
                </fieldset>
                <br>
                </br><br>
                </br>
                <fieldset>
                    <label>
                        <p>Last Name</p>
                        <input LastName="LastName" />
                    </label>
                </fieldset>
                <br>
                </br>
                <br>
                </br>
                <fieldset>
                    <label>
                        <p>StudentID</p>
                        <input StudentID="StudentID" />
                    </label>
                </fieldset>
                <button onClick={(e) => {
                    e.preventDefault()
                    setLoggedIn(true)

                }}>
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Login;
