import React from 'react'
import play from "../assets/play.png";
import "../App.css"
import {auth, provider} from "../firebase"
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider"

function Authentication() {

      const [state, dispatch] = useStateValue();

      const signIn = () => {
            auth
                  .signInWithPopup(provider)
                  .then((result) => {
                        dispatch({
                              type: actionTypes.SET_USER,
                              user: result.user,
                        })
                  })
                  .catch((err) => alert(err.message));
      };

      return (
      <>
            <div className='blob'>
                  {/* <div className="yo"> */}
                  {/* </div> */}
            </div>
            <div className="main_content">
                  <h1 className="main_content_heading">Web App <br />Task</h1>
                  <p className="lorem_ipsum">Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry.</p>
                  <button className="login_button" type="submit" onClick={signIn}>LOGIN | SIGNUP</button>
                  <div className="youtube_link">
                        <a className="youtube_router" href="https://www.youtube.com/channel/UCPgCZNqUo3aaIfwtvXinAXw"  rel="noreferrer" target = "_blank">
                              <img className="youtube"src={play} alt="Youtube Play Link"/>
                              <h4 className="youtube_heading">Go to Youtube</h4>
                        </a>
                  </div>
            </div>
      </>
      )
}

export default Authentication;
