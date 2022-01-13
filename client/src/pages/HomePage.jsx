import React, { useState, useEffect } from 'react';
import {
	FadeInContainer,
	GlassContainer,
	Header,
	InvisibleContainer,
	StickyHeader
} from '../components/ContainerComponents';
import Fade from 'react-reveal/Fade';

const HomePage = () => {
	return (
		<div>
			<Fade bottom effect="backdrop-filter">
				<div className="mt-500px mb-1000px">
					<GlassContainer className="h-300px max-w-700px m-auto p-40px" hover={true}>
						<div className="">
							<Fade bottom>
								<h2 className="fs-30px " style={{ color: 'white', mixBlendMode: 'multiply' }}>
									Hello,{' '}
								</h2>
							</Fade>
							<Fade bottom>
								<h2 className="fs-40px ">
									My name is <span className="fs-100px">Kurt</span>,
								</h2>
							</Fade>
							<Fade bottom>
								<h2 className="fs-40px ">
									<span className="fs-70px">I</span> make <span className="fs-70px">Places</span> on
									the <span className="fs-70px">Internet</span>
								</h2>
							</Fade>
						</div>
					</GlassContainer>
				</div>
			</Fade>
			{/* <div className="geeks" /> */}
			<div className="bob center fs-20px fade_in">Join Me</div>
			<div className="arrows fade_in" />
			<div style={{ zIndex: 1, top: '100vh' }} className="pos-abs w-100per jc-c">
				{/* <div className="pos-abs h-700px max-w-600px w-100per m-auto ">
					<Fade bottom>
					
					</Fade>
				</div> */}

				<div className="w-100per ">
					<FadeInContainer height="700px" width="900px" fade={'left'} hover={true}>
						<div className="">
							<h2 className="fs-50px ta-c">About Me</h2>
							<p className="lh-30px">
								My name is <strong>Kurt LaVacque</strong> and I am an <strong>innovator</strong>!
							</p>
							<p className="lh-30px">
								I use the <strong>foundation</strong> of old concepts to sculpt{' '}
								<strong>new ideas</strong>.
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
								<strong>Skills:</strong> Javascript (MERN Stack), MySQL, Python, Ableton Live 9, Fusion
								360
							</p>
						</div>
					</FadeInContainer>
					<FadeInContainer width="900px" top="300px" fade={'right'} hover={true}>
						{/* <div className="">
							<h2 className="fs-50px ta-c">Skills</h2>
							<p className="lh-30px">
								<b>Technical Skills</b>
							</p>
							<p className="lh-30px">
								<b>Front End: </b>HTML5, CSS3, Javascript, React.js, React Hooks, Redux, jQuery
							</p>
							<p className="lh-30px">
								<b>Back End:</b> MongoDB, Mongoose.js, MySQL, Node.js, Express.js, MERN Stack, Python,
								Django, EasyPost
							</p>
							<p className="lh-30px">
								<b>Other Technologies:</b> Arduino/C++, Git, RESTful APIs, TypeScript, Passport.js,
								OAuth, Stripe API, SEO
							</p>
							<p className="lh-30px">
								<b>Applications:</b> Microsoft Excel, Fusion 360, Postman, Robo 3T,<span className="Apple-converted-space">  </span>Adobe
								Illustrator, Photoshop, Premiere
							</p>
						</div> */}
						<h2 className="fs-50px ta-c">Skills</h2>
						<div class="wrapper jc-c m-auto mt-2rem">
							<div className="w-100per">
								{/* <h3 className="ta-c fs-20px">Skill Quantifier </h3> */}
								<div class="skills">
									<div class="details">
										<span>Javascript</span>
										{/* <span>86%</span> */}
									</div>
									<div class="bar">
										<div id="javascript-bar" />
									</div>
								</div>
								<div class="skills">
									<div class="details">
										<span>FrontEnd</span>
										{/* <span>86%</span> */}
									</div>
									<div class="bar">
										<div id="frontend-bar" />
									</div>
								</div>
								<div className="ml-4rem mb-3rem">
									<div class="skills">
										<div class="details">
											<span>React</span>
											{/* <span>85%</span> */}
										</div>
										<div class="bar">
											<div id="react-bar" />
										</div>
									</div>
									<div class="skills">
										<div class="details">
											<span>HTML</span>
											{/* <span>90%</span> */}
										</div>
										<div class="bar">
											<div id="html-bar" />
										</div>
									</div>
									<div class="skills">
										<div class="details">
											<span>CSS</span>
											{/* <span>75%</span> */}
										</div>
										<div class="bar">
											<div id="css-bar" />
										</div>
									</div>
								</div>
								<div class="skills">
									<div class="details">
										<span>BackEnd</span>
										{/* <span>86%</span> */}
									</div>
									<div class="bar">
										<div id="backend-bar" />
									</div>
								</div>
								<div className="ml-4rem mb-3rem">
									<div class="skills">
										<div class="details">
											<span>MongoDB</span>
											{/* <span>85%</span> */}
										</div>
										<div class="bar">
											<div id="mongodb-bar" />
										</div>
									</div>
									<div class="skills">
										<div class="details">
											<span>MySQL</span>
											{/* <span>85%</span> */}
										</div>
										<div class="bar">
											<div id="mysql-bar" />
										</div>
									</div>
								</div>

								<div class="skills">
									<div class="details">
										<span>Python</span>
										{/* <span>61%</span> */}
									</div>
									<div class="bar">
										<div id="python-bar" />
									</div>
								</div>

								<div class="skills">
									<div class="details">
										<span>Excel</span>
										{/* <span>68%</span> */}
									</div>
									<div class="bar">
										<div id="Excel-bar" />
									</div>
								</div>
							</div>
						</div>
					</FadeInContainer>

					<FadeInContainer height="700px" width="900px" top="500px" fade={'left'} hover={true}>
						<div className="">
							<h2 className="fs-50px ta-c">Experience</h2>
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
								an <b>automated</b> a shipping label system using the EasyPost API to generate labels
								for customer orders.
							</p>
							<p dir="rtl" className="lh-30px">
								<b>
									<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Optimized
								</b>{' '}
								SEO by making human readable <b>pathnames</b> and setting up a sitemap.<span className="Apple-converted-space"> </span>
							</p>
							<p dir="rtl" className="lh-30px">
								<span className="Apple-tab-span"> </span>•<span className="Apple-tab-span"> </span>Manage
								an <b>affiliate</b> team of 20+ people to participate in <b>marketing campaigns</b> and
								product releases.
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
				</div>
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
			</div>
		</div>
	);
};

export default HomePage;
