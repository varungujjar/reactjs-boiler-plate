import axios from 'axios';
import CONFIG from '../config';

/*******************************/
/* Default Axios configuration */
/*******************************/
let serviceApi = axios.create({
	baseURL: CONFIG.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		// option: 'com_ajax',
		// group: 'system',
		// plugin: 'ajax',
		// format: 'json',
	},
});

/*******************************/
/* Default Axios Error Catching 
reserved for future */
/*******************************/
serviceApi.interceptors.response.use(
	(response) => response,
	(error) => {
		// console.log(error);
		throw error;
	}
);

export default serviceApi;
