/**
 * modulo para obtener los posts y gestionarlos
 */

import API from "./api";

let Post = {
	findAll(){
		return API.fetch("posts");
	}
};

export default Post;