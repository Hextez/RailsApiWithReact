import store from './store/index';
import {Login, addUser, getUserInfo} from "./actions/index";

window.store = store;
window.Login = Login;
window.addUser = addUser;
window.getUserInfo = getUserInfo;