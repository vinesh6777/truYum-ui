function Validate() {
	var itemname = document.forms["editmenu"]["name"].value;
	if(itemname=="") {
		alert("Name is required");
		document.forms["editmenu"]["name"].focus();
		return false;
	}
	if ((itemname.length < 2) || (itemname.length > 65)) {
		alert("Name should have 2 to 65 characters.");
		document.forms["editmenu"]["name"].select();
		return false;
	}
	if (/[^a-zA-Z ]/.test(itemname)) {
		alert("Name has to be a Alphabet");
		return false;
	}

	var itemprice = document.forms["editmenu"]["price"].value;
	if(itemprice=="") {
		alert("Price is required");
		document.forms["editmenu"]["price"].focus();
		return false;
	}

	var DOL = document.forms["editmenu"]["dateoflaunch"].value;
	if(DOL=="") {
		alert("Date of launch is Required");
		document.forms["editmenu"]["dateoflaunch"].focus();
		return false;
	}	

	var category = document.forms["editmenu"]["category"].value;
	if(category=="") {
		alert("Category is required");	
		return false;
	}
	}



