/**
 * modulo para tratar consultas de datos, sera la api de la aplicacion
 */

let API = {
	fetch(path){
		return new Promise( (resolve,reject) => {
			// la uri dada por json-server, de npm instalacion global
			let uri = `http://localhost:3000/${path}`;
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
}

export default API;