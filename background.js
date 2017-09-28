document.querySelectorAll("a").forEach((item, _) => {
	var attrib = item.getAttribute("href");
	if (attrib && attrib.indexOf("mailto:") != -1) {

		item.setAttribute("href", "");
		item.setAttribute("target", "")

		var email = attrib.substring(7);
        
        if (item.innerText.indexOf(email) == -1) {
        	item.innerText += " " + email;
        }

       	item.addEventListener("click", (event) => {
       		event.preventDefault()

       		input = document.createElement('input');
			document.body.appendChild(input)
			
			input.value = email
			input.select();
			
			document.execCommand('copy', false);
			
			input.remove();
       });
    }
});
