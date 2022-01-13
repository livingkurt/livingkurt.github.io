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
			{/* <div className="fade_in"> */}
			<div style={{ zIndex: -10 }}>
				<Particles params={particlesjs_config} style={{ position: 'absolute' }} />
			</div>
			<InvisibleContainer style={{ top: '200px', left: '200px' }} className="h-200px w-200px br-20px" />
			<InvisibleContainer style={{ top: '500px', right: '200px' }} className="h-100px w-100px br-20px" />
			<InvisibleContainer style={{ top: '800px', left: '200px' }} className="h-75px w-75px br-10px" />
			<InvisibleContainer style={{ top: '1200px', right: '500px' }} className="h-150px w-150px br-20px" />
			<InvisibleContainer style={{ top: '1600px', right: '800px' }} className="h-250px w-250px br-20px" />
			<InvisibleContainer style={{ top: '1100px', right: '900px' }} className="h-50px w-50px br-10px" />
			<InvisibleContainer style={{ top: '1900px', right: '100px' }} className="h-100px w-100px br-10px" />
			<InvisibleContainer style={{ top: '2200px', left: '200px' }} className="h-200px w-200px br-20px" />
			<InvisibleContainer style={{ top: '2500px', right: '200px' }} className="h-100px w-100px br-20px" />
			<InvisibleContainer style={{ top: '2800px', left: '200px' }} className="h-75px w-75px br-10px" />
			<InvisibleContainer style={{ top: '3200px', right: '500px' }} className="h-150px w-150px br-20px" />
			<InvisibleContainer style={{ top: '3600px', right: '800px' }} className="h-250px w-250px br-20px" />
			<InvisibleContainer style={{ top: '3100px', right: '900px' }} className="h-50px w-50px br-10px" />
			<InvisibleContainer style={{ top: '3900px', right: '100px' }} className="h-100px w-100px br-10px" />
			{/* {position > 0.053263707571801565 && <StickyHeader />} */}
			{/* {position < 0.053263707571801565 && <Header />} */}
			{/* <Header /> */}
			{/* <Header /> */}
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
							{/* <Route exact path="/about" component={About} />
								<Route exact path="/blog" component={Blog} />
								
								<Route path="/contact" component={Contact} /> */}
						</div>
					</div>
				</Router>
			</div>
		</div>
	);
}

export default App;
