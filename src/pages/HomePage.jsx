import React, { useState, useEffect } from 'react';
import {
	FadeInContainer,
	GlassContainer,
	Header,
	InvisibleContainer,
	StickyHeader
} from '../components/ContainerComponents';
import { InvisibleButtons } from '../components/UniversalComponents';
import { useWindowDimensions } from '../components/Hooks';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as ScrollLink } from 'react-scroll';
import { is_desktop, responsive_font } from '../utils/helper_functions';
import { isMobile, BrowserView, MobileView } from 'react-device-detect';

const HomePage = () => {
	const { height, width } = useWindowDimensions();
	const location = useLocation();

	useEffect(
		() => {
			if (location.hash) {
				let elem = document.getElementById(location.hash.slice(1));
				if (elem) {
					elem.scrollIntoView({ behavior: 'smooth' });
				}
			} else {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}
		},
		[ location ]
	);

	return (
		<div className="pos-rel">
			<InvisibleButtons />
			<div className="pos-rel" style={{ top: '10vh' }}>
				<Fade bottom effect="backdrop-filter">
					<div className={`${width < 737 ? 'm-20px' : ''}`}>
						<GlassContainer className="max-w-700px m-auto " hover={true}>
							<div className={` ${width < 737 ? 'p-20px' : 'p-40px'}`}>
								<Fade bottom>
									<h2
										className=" "
										style={{
											color: 'white',
											fontSize: responsive_font(width, 500, 1040, '3vw', '2.5rem', '3rem')
										}}
									>
										Hello,{' '}
									</h2>
								</Fade>
								<Fade bottom>
									<label
										className="title_font "
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '4vw', '1.6rem', '4rem')
										}}
									>
										My name is{' '}
									</label>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '9vw', '5rem', '10rem')
										}}
									>
										Kurt,
									</label>{' '}
								</Fade>
								<Fade bottom>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '6vw', '3rem', '7rem')
										}}
									>
										I{' '}
									</label>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '3vw', '1.6rem', '4rem')
										}}
									>
										make{' '}
									</label>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '6vw', '3rem', '7rem')
										}}
									>
										Places{' '}
									</label>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '3vw', '1.6rem', '4rem')
										}}
									>
										on the{' '}
									</label>
									<label
										className="title_font"
										style={{
											display: 'inline',
											fontSize: responsive_font(width, 500, 1040, '6vw', '3rem', '7rem')
										}}
									>
										Internet
									</label>
								</Fade>
							</div>
						</GlassContainer>
					</div>
				</Fade>
				<ScrollLink activeClass="active" to="about_me" spy={true} smooth={true} duration={2000} offset={-200}>
					<div
						className="fade_in bob pos-rel w-100per jc-c"
						style={{
							fontSize: responsive_font(width, 500, 700, '3vw', '1.6rem', '2rem'),
							top: '18vh'
						}}
					>
						Join Me
					</div>
					<div
						className="w-100per pos-rel"
						style={{
							top: '20vh',
							left: '50%'
						}}
					>
						<div className={`${isMobile ? 'arrows' : 'arrows_large'} fade_in`} />
					</div>
				</ScrollLink>
			</div>
			<div className="w-100per pos-rel" id="about_me" style={{ top: isMobile ? '47vh' : '80vh' }}>
				<FadeInContainer width="900px" screen_width={width} fade={'left'} hover={true}>
					<div className="p-20px">
						<h2
							className="ta-c"
							style={{ fontSize: responsive_font(width, 600, 1040, '5vw', '3rem', '5rem') }}
						>
							Who am I?
						</h2>
						<div
							className="mt-10px mb-20px w-100per max-w-600px m-auto"
							style={{ borderBottom: '2px solid white' }}
						/>
						<p className="lh-30px">
							My name is Kurt, from an early age I had a facination with learning and understanding, I
							learned to play the piano, juggle, ride a unicycle, and solve a rubiks cube just to see if I
							could.
						</p>
						<p className="lh-30px">
							Fast-forward to today, I currently live in the US and I love creating and making things
							beautiful on the web and IRL (in real life)!
						</p>
						<p className="lh-30px">
							I am a Full-Stack Web Developer by day and Arduino/C++ 3D Printing maestro by night with my
							hands in as many different languages and skillsets as I can handle. There is no knowledge
							that I deem unlearnable or unnecessary to learn.
						</p>

						<Link to="/contact" className="fc-white">
							<span
								className="lh-30px title_font br-10px p-10px"
								style={{
									color: 'white',

									display: 'inline-block',
									boxShadow: 'inset rgb(255 255 255 / 20%) 0px 0px 10px 5px',
									filter: 'blur(0px)',
									cursor: 'pointer'
								}}
							>
								Let's talk about it
							</span>
						</Link>

						{/* <p className="lh-30px br-20px p-10px w-75per" style={{ backgroundColor: '#8f285552' }}>
							My name is Kurt, from an early age I had a facination with learning and understanding, I
							learned to play the piano, juggle, ride a unicycle, and solve a rubiks cube just to see if I
							could.
						</p>
						<p className="lh-30px br-20px p-10px w-50per ml-auto" style={{ backgroundColor: '#21809f52' }}>
							Fast-forward to today, I currently live in the US and I love creating and making things
							beautiful on the web and IRL (in real life)!
						</p>
						<p className="lh-30px br-20px p-10px w-75per" style={{ backgroundColor: '#50176852' }}>
							I am a Full-Stack Web Developer by day and Arduino/C++ 3D Printing maestro by night with my
							hands in as many different languages and skillsets as I can handle. There is no knowledge
							that I deem unlearnable or unnecessary to learn.
						</p>
						<ScrollLink to="/contact">
							<button className="zoom_b title_font btn primary br-10px hover btn-glass" id="button">
								Let's talk about it
							</button>
						</ScrollLink> */}
						{/* <p className="lh-30px">
							Creative, Problem Solvering, aficionado with the need to provide and have as much
							customability as possible
						</p> */}
					</div>
				</FadeInContainer>
				<ScrollLink activeClass="active" to="skills" spy={true} smooth={true} duration={2000} offset={-200}>
					<div
						className="fade_in bob pos-rel w-100per jc-c"
						style={{
							fontSize: responsive_font(width, 500, 700, '3vw', '1.6rem', '2rem'),
							top: '18vh'
						}}
					>
						Follow Me
					</div>
					<div
						className="w-100per pos-rel"
						style={{
							top: '20vh',
							left: '50%'
						}}
					>
						<div className={`${isMobile ? 'arrows' : 'arrows_large'} fade_in`} />
					</div>
				</ScrollLink>
			</div>
			<div className="w-100per pos-rel" id="skills" style={{ top: isMobile ? '88vh' : '150vh' }}>
				<FadeInContainer width="900px" fade={'right'} hover={true} screen_width={width}>
					<div className="p-20px">
						<h2
							className=" ta-c"
							style={{ fontSize: responsive_font(width, 600, 1040, '5vw', '3rem', '5rem') }}
						>
							Skills
						</h2>
						<div
							className="mt-10px mb-20px w-100per max-w-600px m-auto"
							style={{ borderBottom: '2px solid white' }}
						/>
						<div className=" mt-2rem">
							<div className="skills">
								<div className="details">
									<span className="fs-16px">Javascript</span>
								</div>
								<div className="bar">
									<div id="javascript-bar" />
								</div>
							</div>
							<div className="skills">
								<div className="details">
									<span className="fs-16px">FrontEnd</span>
								</div>
								<div className="bar">
									<div id="frontend-bar" />
								</div>
							</div>
							<div className="ml-4rem mb-3rem">
								<div className="skills">
									<div className="details">
										<span className="fs-16px">React</span>
									</div>
									<div className="bar">
										<div id="react-bar" />
									</div>
								</div>
								<div className="skills">
									<div className="details">
										<span className="fs-16px">HTML</span>
									</div>
									<div className="bar">
										<div id="html-bar" />
									</div>
								</div>
								<div className="skills">
									<div className="details">
										<span className="fs-16px">CSS</span>
									</div>
									<div className="bar">
										<div id="css-bar" />
									</div>
								</div>
							</div>
							<div className="skills">
								<div className="details">
									<span className="fs-16px">BackEnd</span>
								</div>
								<div className="bar">
									<div id="backend-bar" />
								</div>
							</div>
							<div className="ml-4rem mb-3rem">
								<div className="skills">
									<div className="details">
										<span className="fs-16px">MongoDB</span>
									</div>
									<div className="bar">
										<div id="mongodb-bar" />
									</div>
								</div>
								<div className="skills">
									<div className="details">
										<span className="fs-16px">MySQL</span>
									</div>
									<div className="bar">
										<div id="mysql-bar" />
									</div>
								</div>
							</div>

							<div className="skills">
								<div className="details">
									<span>Python</span>
								</div>
								<div className="bar">
									<div id="python-bar" />
								</div>
							</div>

							<div className="skills">
								<div className="details">
									<span>Excel</span>
								</div>
								<div className="bar">
									<div id="Excel-bar" />
								</div>
							</div>

							<p className="lh-30px ta-c">
								<h3 className="fs-20px">Skills</h3>
							</p>
							<div
								className="mt-10px mb-20px w-100per max-w-400px m-auto"
								style={{ borderBottom: '2px solid white' }}
							/>
							<p className="lh-30px">
								<h3>Front End: </h3>HTML5, CSS3, Javascript, React.js, React Hooks, Redux, jQuery
							</p>
							<p className="lh-30px">
								<h3>Back End:</h3> MongoDB, Mongoose.js, MySQL, Node.js, Express.js, MERN Stack, Python,
								Django, EasyPost
							</p>
							<p className="lh-30px">
								<h3>Other Technologies:</h3> Arduino/C++, Git, RESTful APIs, TypeScript, Passport.js,
								OAuth, Stripe API, SEO
							</p>
							<p className="lh-30px">
								<h3>Applications:</h3> Microsoft Excel, Fusion 360, Postman, Robo 3T,<span className="Apple-converted-space">  </span>Adobe
								Illustrator, Photoshop, Premiere
							</p>
						</div>
					</div>
				</FadeInContainer>
				<ScrollLink activeClass="active" to="experience" spy={true} smooth={true} duration={2000} offset={-200}>
					<div
						className="fade_in bob pos-rel w-100per jc-c"
						style={{
							fontSize: responsive_font(width, 500, 700, '3vw', '1.6rem', '2rem'),
							top: '13vh'
						}}
					>
						Follow Me
					</div>
					<div
						className="w-100per pos-rel"
						style={{
							top: '15vh',
							left: '50%'
						}}
					>
						<div className={`${isMobile ? 'arrows' : 'arrows_large'} fade_in`} />
					</div>
				</ScrollLink>
			</div>
			<div className="w-100per pos-rel" id="experience" style={{ top: isMobile ? '120vh' : '195vh' }}>
				<FadeInContainer width="900px" fade={'left'} hover={true} screen_width={width}>
					<div className="p-20px">
						<h2
							className=" ta-c"
							style={{ fontSize: responsive_font(width, 600, 1040, '5vw', '3rem', '5rem') }}
						>
							Experience
						</h2>
						<div
							className="mt-10px mb-20px w-100per max-w-600px m-auto"
							style={{ borderBottom: '2px solid white' }}
						/>
						<p className="ta-lh-30px p2">
							<b>Work Experience</b>
						</p>
						<p className="lh-30px">
							Glow LEDs | https://github.com/livingkurt/Glow-LEDs | https://glow-leds.com/<span className="Apple-converted-space">                  </span>March
							2020 - Present
						</p>
						<p className="lh-30px">
							<b>
								Lead Developer<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
							</b>
							<span className="Apple-tab-span"> </span>
							<span className="Apple-tab-span"> </span>
							<span className="Apple-tab-span"> </span>
							<span className="Apple-tab-span"> </span>{' '}
							<span className="Apple-converted-space">
								 <span className="Apple-tab-span"> </span>                {' '}
							</span>Austin, TX
						</p>
						<p dir="rtl" className="lh-30px">
							<b>
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Created
							</b>{' '}
							and maintain website using the <b>MERN</b> Stack with <b>Typescript</b>, Redux and SCSS.
						</p>
						<p dir="rtl" className="lh-30px">
							<b>
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Design
							</b>{' '}
							and <b>manufacture</b> products in house using Fusion 360, and Arduino to program LEDs.
						</p>
						<p dir="rtl" className="lh-30px">
							<b>
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Developed
							</b>{' '}
							an <b>automated</b> a shipping label system using the EasyPost API to generate labels for
							customer orders.
						</p>
						<p dir="rtl" className="lh-30px">
							<b>
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Optimized
							</b>{' '}
							SEO by making human readable <b>pathnames</b> and setting up a sitemap.<span className="Apple-converted-space"> </span>
						</p>
						<p dir="rtl" className="lh-30px">
							<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Manage an{' '}
							<b>affiliate</b> team of 20+ people to participate in <b>marketing campaigns</b> and product
							releases.
						</p>
						<p dir="rtl" className="lh-30px">
							<b>
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Responsible
							</b>{' '}
							for Customer Service, Product Development, <b>Project Management</b>, Data Analytics,{' '}
							<b>SEO</b>, Marketing, and Business Management within the company.
						</p>
						<p className="lh-30px">
							Apple (via Apex)<span className="Apple-tab-span"> </span>
							<span className="Apple-tab-span"> </span>
							<span className="Apple-converted-space">
								            <span className="Apple-tab-span"> </span>           <span className="Apple-tab-span"> </span>{' '}
								   <span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>        {' '}
							</span>March 2018 - December 2019
						</p>
					</div>
				</FadeInContainer>
				<Link activeClass="active" to="/projects">
					<div
						className="fade_in bob pos-rel w-100per jc-c"
						style={{
							fontSize: responsive_font(width, 500, 700, '3vw', '1.6rem', '2rem'),
							top: '30vh'
						}}
					>
						See What I've Built
					</div>
					{/* <div className="pulsating-circle" /> */}
					<div
						className="w-100per pos-rel  mb-200px"
						style={{
							top: '35vh',
							left: '50%'
						}}
					>
						{/* <div className={`${isMobile ? 'arrows' : 'arrows_large'} fade_in`} /> */}
						<div className="pulsating-circle fade_in  mb-200px" />
						<div className="pos-rel h-200px" style={{ top: '20vh' }} />
					</div>
				</Link>
			</div>
			{/* <div className="w-100per pos-rel " id="more" style={{ top: '500vh' }}>
				<FadeInContainer height="700px" width="900px" fade={'left'} hover={true} screen_width={width}>
					<div className="p-20px ">
						<h2 className="fs-50px ta-c">About Me</h2>
						<p className="lh-30px">
							My name is <strong>Kurt LaVacque</strong> and I am an <strong>innovator</strong>!
						</p>
						<p className="lh-30px">
							I use the <strong>foundation</strong> of old concepts to sculpt <strong>new ideas</strong>.
						</p>
						<p className="lh-30px">
							I learn, create, and make the world around me into a <strong>well-oiled machine</strong>,
							constantly improving every day.
						</p>
						<p className="lh-30px">
							I live in <strong>Austin, TX</strong>.
						</p>
						<p className="lh-30px">
							I am a <strong>web developer</strong> by day and <strong>CAD designer</strong> by night.
						</p>
						<p className="lh-30px">
							I believe that if I'm not <strong>moving forwards</strong>, then I must be{' '}
							<strong>moving backwards</strong>.
						</p>
						<p className="lh-30px">
							<strong>Skills:</strong> Javascript (MERN Stack), MySQL, Python, Ableton Live 9, Fusion 360
						</p>
					</div>
				</FadeInContainer>
			</div> */}
			{/* <FadeInContainer width="900px" top="300px" fade={'right'}>
						<div>
							<p className="ta-c p1">Kurt LaVacque</p>
							<p className="ta-c p2">lavacquek@icloud.com | 906-284-2208 | Austin, TX</p>
							<p className="ta-c p2">
								<b>LinkedIn:</b> bit.ly/2Yx1WWh | <b>Github</b>: https://bit.ly/2YvC5hq |{' '}
								<b>Portfolio: </b>livingkurt.github.io
							</p>
							<p className="ta-c p3">
								<br />
							</p>
							<p className="ta-c p2">
								<b>Summary</b>
							</p>
							<p className="ta-c p4">
								I am a <b>Web Developer</b> with 2 years of experience. My <b>specialty</b> is in
								Javascript using React.js, with a passion for bringing my code to life with{' '}
								<b>Arduino</b>. Currently, I run my own <b>successful</b> 3D printing and LED business
								while maintaining all facets of the <b>web design </b>and functionality. Looking for a{' '}
								<b>company</b> that is in the business of creating <b>new</b> and <b>efficient</b> ways
								to experience life congruent with <b>technology</b>.
							</p>
							<p className="ta-c p5">
								<br />
							</p>
							<p className="ta-c p2">
								<b>Technical Skills</b>
							</p>
							<p className="ta-c p4">
								<b>Front End: </b>HTML5, CSS3, Javascript, React.js, React Hooks, Redux, jQuery
							</p>
							<p className="ta-c p4">
								<b>Back End:</b> MongoDB, Mongoose.js, MySQL, Node.js, Express.js, MERN Stack, Python,
								Django, EasyPost
							</p>
							<p className="ta-c p4">
								<b>Other Technologies:</b> Arduino/C++, Git, RESTful APIs, TypeScript, Passport.js,
								OAuth, Stripe API, SEO
							</p>
							<p className="ta-c p4">
								<b>Applications:</b> Microsoft Excel, Fusion 360, Postman, Robo 3T,<span className="Apple-converted-space">  </span>Adobe
								Illustrator, Photoshop, Premiere
							</p>
							<p className="ta-c p5">
								<br />
							</p>
							<p className="ta-c p2">
								<b>Work Experience</b>
							</p>
							<p className="ta-c p4">
								Glow LEDs | https://github.com/livingkurt/Glow-LEDs | https://glow-leds.com/<span className="Apple-converted-space">                  </span>March
								2020 - Present
							</p>
							<p className="ta-c p4">
								<b>
									Lead Developer<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
								</b>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>{' '}
								<span className="Apple-converted-space">
									 <span className="Apple-tab-span"> </span>                {' '}
								</span>Austin, TX
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Created
								</b>{' '}
								and maintain website using the <b>MERN</b> Stack with <b>Typescript</b>, Redux and SCSS.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Design
								</b>{' '}
								and <b>manufacture</b> products in house using Fusion 360, and Arduino to program LEDs.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Developed
								</b>{' '}
								an <b>automated</b> a shipping label system using the EasyPost API to generate labels
								for customer orders.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Optimized
								</b>{' '}
								SEO by making human readable <b>pathnames</b> and setting up a sitemap.<span className="Apple-converted-space"> </span>
							</p>
							<p dir="rtl" className="ta-c p6">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Manage
								an <b>affiliate</b> team of 20+ people to participate in <b>marketing campaigns</b> and
								product releases.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Responsible
								</b>{' '}
								for Customer Service, Product Development, <b>Project Management</b>, Data Analytics,{' '}
								<b>SEO</b>, Marketing, and Business Management within the company.
							</p>
							<p className="ta-c p4">
								Apple (via Apex)<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-converted-space">
									            <span className="Apple-tab-span"> </span>           <span className="Apple-tab-span"> </span>{' '}
									   <span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>        {' '}
								</span>March 2018 - December 2019
							</p>
							<p className="ta-c p4">
								<b>
									GIS Technician<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
									<span className="Apple-tab-span"> </span>
								</b>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>{' '}
								<span className="Apple-converted-space">
									 <span className="Apple-tab-span"> </span>          {' '}
								</span>Sunnyvale, CA
							</p>
							<p dir="rtl" className="ta-c p6">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Part
								of the Pilot team for Apple Maps who's responsibility was to create <b>workflows, </b>improve<b> </b>on
								old processes, and increase <b>efficiency</b> to be <b>scaled</b> to larger teams.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Analyzed,{' '}
								</b>validated data content, and <b>assembled</b> new content from various sources
								including databases, files, spreadsheets, and websites using <b>QGIS</b> and{' '}
								<b>Excel</b>.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Established
								</b>{' '}
								a system for <b>generating</b> complex shapes for <b>modeling</b> 3D Buildings.
							</p>
							<p dir="rtl" className="ta-c p5">
								<br />
							</p>
							<p className="ta-c p2">
								<b>Projects</b>
							</p>
							<p className="ta-c p4">
								<b>Glow Strings V2 </b>| https://github.com/livingkurt/Glow_Strings_V2
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Glow
									Strings V2
								</b>{' '}
								is a C++/<b>Arduino</b> based interface using the <b>FastLED</b> library to animate
								individually addressable <b>LEDs</b> such as WS2811, WS2812B, etc.
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Designed
								</b>{' '}
								the housing in <b>Fusion 360</b>, the programming in <b>Arduino</b> and brought it all
								together in a sleek and easy to use system.
							</p>
							<p dir="rtl" className="ta-c p6">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Developed
								a <b>single button interface</b> that uses a combination of clicks, short presses and
								long presses to navigate 50+ custom designed modes and flashing pattern options.
							</p>
							<p className="ta-c p4">
								<b>CoLab </b>| https://github.com/livingkurt/CoLab | https://colab.herokuapp.com
							</p>
							<p dir="rtl" className="ta-c p6">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>CoLab
								</b>{' '}
								is a place where makers, creators, and doers can <b>collaborate</b> on projects
								together.
							</p>
							<p dir="rtl" className="ta-c p6">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>The
								ability to source <b>highly qualified teams</b> for projects in the community or
								remotely.
							</p>
							<p dir="rtl" className="ta-c p6">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Set
								up the <b>boiler plate </b>template based on the <b>MERN stack</b> as well as{' '}
								<b>authorization</b> using Google OAuth.
							</p>
							<p className="ta-c p2">
								<b>Education</b>
							</p>
							<p className="ta-c p4">
								<b>The University of Texas</b> |<b> </b>Austin, TX<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-tab-span"> </span>
								<span className="Apple-converted-space">    </span>March 2020
							</p>
							<p className="ta-c p4">
								Certificate in <b>Full-Stack Web Development</b>
							</p>
						</div>
					</FadeInContainer> */}
			{/* </div> */}
			{/* <Fade bottom>
					<div className="mt-50px ">
						<GlassContainer className="h-900px max-w-1000px m-auto" hover={true}>
							<p>Hello</p>
						</GlassContainer>
					</div>
				</Fade>
				<Fade bottom>
					<div className="mt-50px ">
						<GlassContainer className="h-900px max-w-1000px m-auto" hover={true}>
							<p>Hello</p>
						</GlassContainer>
					</div>
				</Fade> */}
			{/* </div> */}
			{/* </div> */}
		</div>
	);
};

export default HomePage;
