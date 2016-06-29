/**
 * modulo para renderizar los posts
 */

import xss from "xss-filters";

let ui = {
	renderPosts(posts){
		let elements = posts.map( (post) => {
			let { title, lastReply } = post;

			return articleTemplate(title, lastReply);
		});

		let target = document.querySelector(".container");
		target.innerHTML = elements.join("");
	}
};

function articleTemplate(title, lastReply){
	var safeTitle = xss.inHTMLData(title);
	var safeLastReply = xss.inHTMLData(lastReply);

	let template = `
		<article class='post'>
			<h2 class='post-title'>
				${safeTitle}
			</h2>
			<p class='post-meta'>
				${safeLastReply}
			</p>
		</article>`;

	return template;
}

export default ui;