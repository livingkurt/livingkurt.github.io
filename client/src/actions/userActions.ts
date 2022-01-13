import axios from 'axios';
import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGOUT,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAIL,
	USER_CONTACT_REQUEST,
	USER_CONTACT_SUCCESS,
	USER_CONTACT_REMOVE_SUCCESS,
	USER_CONTACT_FAIL,
	USER_PASSWORD_RESET_SUCCESS,
	USER_PASSWORD_RESET_FAIL,
	USER_PASSWORD_RESET_REQUEST,
	USER_RESET_PASSWORD_REQUEST,
	USER_RESET_PASSWORD_SUCCESS,
	USER_RESET_PASSWORD_FAIL,
	USER_VERIFY_REQUEST,
	USER_VERIFY_SUCCESS,
	USER_VERIFY_FAIL,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_USER_REQUEST,
	USER_UPDATE_USER_SUCCESS,
	USER_UPDATE_USER_FAIL,
	GET_ERRORS,
	SET_CURRENT_USER,
	USER_LOADING,
	USER_SAVE_FAIL,
	USER_SAVE_REQUEST,
	USER_SAVE_SUCCESS,
	USER_REGISTER_EMPTY
} from '../constants/userConstants';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { create_query } from '../utils/helper_functions';

// import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

// // Register User
// export const register = (userData: any) => (dispatch: (arg0: { type: string; payload: any }) => any) => {
// 	console.log({ userData });
// 	axios.post('/api/users/register', userData).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: err.response.data
// 		})
// 	);
// };

export const register = (userData: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	dispatch({ type: USER_REGISTER_REQUEST, payload: userData });
	try {
		const { data } = await axios.post('/api/users/register', userData);
		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		axios.post('/api/emails/account_created', data);
		// axios.post('/api/emails/verify', data);
		dispatch({ type: USER_REGISTER_EMPTY, payload: {} });
		setAuthToken(false);
		// Set current user to empty object {} which will set isAuthenticated to false
		dispatch(setCurrentUser({}));
	} catch (error) {
		console.log({ error });
		console.log({ error: error });
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error ? error : error.message
		});
	}
};

export const login = (userData: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	dispatch({ type: USER_LOGIN_REQUEST, payload: userData });
	try {
		const { data } = await axios.post('/api/users/login', userData);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		// Set access_token to localStorage
		const { access_token, refresh_token } = data;
		console.log({ data });
		localStorage.setItem('accessToken', access_token);
		// localStorage.setItem('refreshToken', refresh_token);
		// Set access_token to Auth header
		setAuthToken(access_token);
		// Decode access_token to get user data
		const decoded = jwt_decode(access_token);
		// Set current user
		dispatch(setCurrentUser(decoded));
	} catch (error) {
		console.log({ error });
		console.log({ login: error });
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error ? error : error.message
		});
	}
};

// Set logged in user
export const setCurrentUser = (decoded: unknown) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING
	};
};

// Log user out
export const logout = (refresh_token: string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	localStorage.removeItem('accessToken');
	// localStorage.removeItem('refreshToken');
	// const { data } = await axios.post('/api/users/logout', {
	// 	refresh_token
	// });
	// Remove token from local storage

	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

// export const check_refresh_token = (access_token: any) => async (
// 	dispatch: (arg0: { type: string; payload: any }) => void
// ) => {
// 	dispatch({ type: USER_LOGIN_REQUEST, payload: access_token });
// 	try {
// 		// const token = localStorage.accessToken;
// 		const { data } = await axios.post('/api/users/refresh_login', { access_token });
// 		// dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
// 		// // Set token to localStorage
// 		// const { token } = data;
// 		// console.log(data);
// 		// localStorage.setItem('accessToken', token);
// 		// // Set token to Auth header
// 		// setAuthToken(token);
// 		// // Decode token to get user data
// 		// const decoded = jwt_decode(token);
// 		// console.log({ decoded });
// 		// // Set current user
// 		// dispatch(setCurrentUser(decoded));
// 	} catch (error) {
// 		console.log({ login: error });
// 		dispatch({ type: USER_LOGIN_FAIL, payload: error });
// 	}
// };

export const update = (user_data: any) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	console.log({ update: user_data });
	const { userLogin: { userInfo } } = getState();
	dispatch({
		type: USER_UPDATE_REQUEST,
		payload: {}
	});
	try {
		const { data } = await axios.put(
			'/api/users/update/' + user_data._id,
			{
				first_name: user_data.first_name,
				last_name: user_data.last_name,
				email: user_data.email,
				password: user_data.password,
				is_affiliated: user_data.is_affiliated,
				email_subscription: user_data.email_subscription,
				affiliate: user_data.affiliate,
				shipping: user_data.shipping,
				isVerified: user_data.isVerified,
				isAdmin: user_data.isAdmin,
				access_token: userInfo.access_token,
				refresh_token: userInfo.refresh_token
			},
			{
				headers: {
					Authorization: 'Bearer ' + userInfo.access_token
				}
			}
		);

		dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

		const { access_token, refresh_token } = data;
		setAuthToken(access_token);
		const decoded = jwt_decode(access_token);
		console.log({ decoded });
		// Set current user
		localStorage.setItem('accessToken', access_token);
		localStorage.setItem('refreshToken', refresh_token);
		dispatch(setCurrentUser(decoded));
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_UPDATE_FAIL, payload: error });
	}
};

export const saveUser = (user: any) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	console.log({ userActions: user });
	try {
		dispatch({ type: USER_SAVE_REQUEST, payload: user });
		const { userLogin: { userInfo } } = getState();
		if (!user._id) {
			const { data } = await axios.post('/api/users', user, {
				headers: {
					Authorization: 'Bearer ' + userInfo.access_token
				}
			});
			dispatch({ type: USER_SAVE_SUCCESS, payload: data });
		} else {
			const { data } = await axios.put('/api/users/' + user._id, user, {
				headers: {
					Authorization: 'Bearer ' + userInfo.access_token
				}
			});
			dispatch({ type: USER_SAVE_SUCCESS, payload: data });
		}
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_SAVE_FAIL, payload: error });
	}
};

export const updateUser = (user_data: any) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	const { userLogin: { userInfo } } = getState();
	console.log({ userInfo });
	dispatch({
		type: USER_UPDATE_USER_REQUEST,
		payload: {
			userId: user_data.userId,
			first_name: user_data.first_name,
			last_name: user_data.last_name,
			email: user_data.email,
			password: user_data.password,
			is_affiliated: user_data.is_affiliated,
			email_subscription: user_data.email_subscription,
			affiliate: user_data.affiliate,
			isVerified: user_data.isVerified,
			isAdmin: user_data.isAdmin
		}
	});
	try {
		const { data } = await axios.put(
			'/api/users/update/' + user_data.userId,
			{
				first_name: user_data.first_name,
				last_name: user_data.last_name,
				email: user_data.email,
				password: user_data.password,
				is_affiliated: user_data.is_affiliated,
				email_subscription: user_data.email_subscription,
				affiliate: user_data.affiliate,
				isVerified: user_data.isVerified,
				isAdmin: user_data.isAdmin,
				access_token: userInfo.access_token,
				refresh_token: userInfo.refresh_token
			},
			{
				headers: {
					Authorization: 'Bearer ' + userInfo.access_token
				}
			}
		);
		dispatch({ type: USER_UPDATE_USER_SUCCESS, payload: data });
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_UPDATE_USER_FAIL, payload: error });
	}
};

export const password_reset = (user_id: string, password: string, repassword: string) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	dispatch({ type: USER_RESET_PASSWORD_REQUEST, payload: { user_id, password, repassword } });
	try {
		const { data } = await axios.put('/api/users/password_reset', { user_id, password, repassword });
		console.log({ password_reset: data });
		if (data && data.hasOwnProperty('first_name')) {
			dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
			axios.post('/api/emails/password_reset', data);
		}
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_RESET_PASSWORD_FAIL, payload: error });
	}
};

export const reset_password = (email: string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	dispatch({ type: USER_PASSWORD_RESET_REQUEST, payload: { email } });
	try {
		const { data } = await axios.post('/api/users/reset_password', { email });
		console.log({ data });
		dispatch({ type: USER_PASSWORD_RESET_SUCCESS, payload: data });
		axios.post('/api/emails/reset_password', data);
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_PASSWORD_RESET_FAIL, payload: error });
	}
};

export const verify = (user_id: string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	console.log({ user_id });
	dispatch({ type: USER_VERIFY_REQUEST, payload: { user_id } });
	try {
		const { data } = await axios.put('/api/users/verify/' + user_id);
		dispatch({ type: USER_VERIFY_SUCCESS, payload: data });
		console.log({ verify: data });
		axios.post('/api/emails/account_created', data);
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_VERIFY_FAIL, payload: error });
	}
};

export const contact = (
	first_name: string,
	last_name: string,
	email: string,
	order_number: string,
	reason: string,
	message: string,
	inspirational_pictures: Array<string>,
	artist_name: string,
	instagram_handle: string,
	facebook_name: string,
	song_id: string,
	quote: string
) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
	const reason_for_contact = reason;
	dispatch({
		type: USER_CONTACT_REQUEST,
		payload: { first_name, last_name, email, order_number, reason_for_contact, message }
	});
	try {
		const { data } = await axios.post('/api/emails/contact', {
			first_name,
			last_name,
			email,
			order_number,
			reason_for_contact,
			message,
			inspirational_pictures,
			artist_name,
			instagram_handle,
			facebook_name,
			song_id,
			quote
		});
		axios.post('/api/emails/contact_confirmation', {
			first_name,
			last_name,
			email,
			order_number,
			reason_for_contact,
			message,
			inspirational_pictures,
			artist_name,
			instagram_handle,
			facebook_name,
			song_id,
			quote
		});
		dispatch({ type: USER_CONTACT_SUCCESS, payload: data });
		dispatch({ type: USER_CONTACT_REMOVE_SUCCESS, payload: {} });
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_CONTACT_FAIL, payload: error });
	}
};

export const listUsers = (query: any) => async (
	dispatch: (arg0: { type: string; payload?: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	try {
		dispatch({ type: USER_LIST_REQUEST });
		const { userLogin: { userInfo } } = getState();
		const { data } = await axios.get('/api/users?' + create_query(query), {
			headers: { Authorization: 'Bearer ' + userInfo.access_token }
		});
		dispatch({ type: USER_LIST_SUCCESS, payload: data });
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_LIST_FAIL, payload: error });
	}
};

export const deleteUser = (userId: string) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	try {
		dispatch({ type: USER_DELETE_REQUEST, payload: userId });
		const { userLogin: { userInfo } } = getState();
		const { data } = await axios.delete('/api/users/' + userId, {
			headers: { Authorization: 'Bearer ' + userInfo.access_token }
		});
		dispatch({ type: USER_DELETE_SUCCESS, payload: data });
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_DELETE_FAIL, payload: error });
	}
};

export const detailsUser = (userId: string) => async (
	dispatch: (arg0: { type: string; payload: any }) => void,
	getState: () => { userLogin: { userInfo: any } }
) => {
	console.log({ userId });
	console.log('hello');
	try {
		dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
		const { userLogin: { userInfo } } = getState();
		const { data } = await axios.get('/api/users/' + userId, {
			headers: { Authorization: 'Bearer ' + userInfo.access_token }
		});
		dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		console.log({ error });
		dispatch({ type: USER_DETAILS_FAIL, payload: error });
	}
};
