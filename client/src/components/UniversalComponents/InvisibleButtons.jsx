import React from 'react';
import { InvisibleContainer } from '../ContainerComponents';

const InvisibleButtons = () => {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return (
		<div>
			{[ ...Array(20).keys() ].map((item) => (
				<InvisibleContainer
					style={{ top: `${getRandomInt(2, 50)}00px`, left: `${getRandomInt(2, 50)}00px` }}
					className={`h-${getRandomInt(2, 50)}00px w-${getRandomInt(2, 50)}00px br-20px`}
				/>
			))}
			{/* <InvisibleContainer style={{ top: '200px', left: '200px' }} className="h-200px w-200px br-20px" />
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
			<InvisibleContainer style={{ top: '3900px', right: '100px' }} className="h-100px w-100px br-10px" /> */}
		</div>
	);
};

export default InvisibleButtons;
