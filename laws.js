function redirect() {

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

console.log(getcheckeditem)



if (getcheckeditem == "California"){

	window.location.href="cali.html"
}

if (getcheckeditem == "Arkansas"){

	window.location.href="arkansas.html"
}

if (getcheckeditem == "Florida"){

	window.location.href="florida.html"
}

if (getcheckeditem == "Texas"){

	window.location.href="texas.html"
}


if (getcheckeditem == "Alabama"){

	window.location.href="alabama.html"
}

if (getcheckeditem == "on"){

	alert("Nothing was selected")
}


}


function redirecthome() {

	window.location.href="index.html"
}