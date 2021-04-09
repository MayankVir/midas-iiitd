import React from 'react';
import Navbar from './components/Navbar'
import Authentication from './components/Authentication'
import mainImg from "../src/assets/1.jpg"
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  const signInStyle = {
	  color: "white",
	  margin: "200px 500px"
  };

  return (
	<div className="App">

		{(!user ? (
			<>
				<div className = "box_content">
					{/* NAVBAR */}
					<Router>
						<Navbar />
					</Router>

					{/* Main Content */}

					<div className="content">
						<div className="main_page_img">
							<img className = "colleague_img"src = {mainImg} alt="Main Page" />
						</div>

						<div className="yo">
							<Router>
								<Authentication />
							</Router>
						</div>
					</div>
				</div> 
			</>
		) 
		:
		(
			<>
			<div className="box_content">
				<Router>
					<Navbar />
				</Router>
				<h1 style={signInStyle}> You are Signed In </h1>
			</div>
			</>
		)
		)}
    </div>
  );
}

export default App;
