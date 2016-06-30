/**
 * modulo para obtener los usuarios
 */

import API from "./api";

let User = {
	findRecent(){
		return API.fetch("activeUsers");
	}
};

export default User;