/**
 * modulo para obtener los posts y gestionarlos
 */

let Post = {
	findAll(){
		return new Promise( (resolve,reject) => {
			// la uri dada por json-server, de npm instalacion global
			let uri = "http://localhost:3000/posts";
			let request = new XMLHttpRequest();

			request.open("GET", uri, true);

			request.onload = () => {
				if(request.status >= 200 && request.status < 400){
					resolve( JSON.parse(request.response) );
				}
			};

			request.onerror = () => {
				reject( new Error("Something wrong with API") );
			};

			request.send();
		});
	}
};

export default Post;