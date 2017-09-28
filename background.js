document.querySelectorAll("a").forEach((item, _) => {
	var attrib = item.getAttribute("href");
	if (attrib && attrib.indexOf("mailto:") != -1) {

		item.setAttribute("href", "#");
		var email = attrib.substring(7);
        if (item.innerText.indexOf(email) == -1) {
        	item.innerText += " " + email;
        }
    }
});
