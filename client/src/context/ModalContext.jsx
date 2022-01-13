import { createContext, useState } from 'react';

const ModalContext = createContext({
	show_modal: false,
	set_show_modal: (auth) => {},
	children: false,
	set_children: (auth) => {}
});

export default ModalContext;
