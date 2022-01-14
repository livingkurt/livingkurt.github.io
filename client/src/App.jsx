import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import particlesjs_config from './particlesjs-config.json';
import Particles from 'react-tsparticles';
import { GlassModal, Header, InvisibleContainer } from './components/ContainerComponents';
import Fade from 'react-reveal/Fade';
import { HomePage, ContactPage, ProjectsPage } from './pages';
import ModalContext from './context/ModalContext';

function App() {
	const background = {
		backgroundImage: `url(./images/bg.jpg)`,
		backgroundPosition: 'center',
		position: 'fixed',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		width: '100vw',
		height: '100vh',
		zIndex: '-5'
	};

	const [ position, set_position ] = useState();

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => {
			window.removeEventListener('scroll', listenToScroll);
		};
	}, []);

	const listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrolled = winScroll / height;

		set_position(scrolled);
	};

	const [ show_modal, set_show_modal ] = useState(false);
	const [ children, set_children ] = useState(false);
	console.log({ show_modal });
	return (
		<div className="pos-rel">
			<div className="" style={background} />
			<GlassModal set_show_modal={set_show_modal} show_modal={show_modal}>
				{children}
			</GlassModal>
			<div style={{ zIndex: -10 }}>
				<Particles params={particlesjs_config} style={{ position: 'absolute' }} />
			</div>
			<div>
				<Router>
					<div>
						<Header />
						<div className="content_div">
							<ModalContext.Provider value={{ show_modal, set_show_modal, children, set_children }}>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/contact" component={ContactPage} />
								<Route exact path="/projects" component={ProjectsPage} />
							</ModalContext.Provider>
						</div>
					</div>
				</Router>
			</div>
		</div>
	);
}

export default App;
