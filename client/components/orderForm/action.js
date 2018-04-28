import { createActions, handleActions } from "redux-actions";

const defaultState = {userName: "", userSurname: "", userEmail: "" };

export const { setUserName, setUserSurname, setUserEmail } = createActions({
	"SET_USER_NAME": (userName) => ({ userName: userName }),
	"SET_USER_SURNAME": (userSurname) => ({ userSurname: userSurname }),
	"SET_USER_EMAIL": (email) => ({ email: email })
});

export const orderFormReducer = handleActions({
	[setUserName] (state, {payload: {userName}} ) {
		return {...state, userName: userName};
	},
	[setUserSurname] (state, {payload: {surname}}) {
		return {...state, surname: surname};
	},
	[setUserEmail] (state, {payload: {email}}) {
		return {...state, email: email};
	}
}, defaultState);
