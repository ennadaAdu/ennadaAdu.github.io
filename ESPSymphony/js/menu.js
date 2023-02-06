choseLanguage = function()
{
	languageSelect = document.getElementById('language');
	selectedIndex = languageSelect.selectedIndex;
				
	//Commit it to local storage
	localStorage.setItem("language",
		languageSelect[selectedIndex].value);
	
	window.onload();
}
choseShruthi = function()
{
	shruthiSelect = document.getElementById('shruthi');
	selectedIndex = shruthiSelect.selectedIndex;
				
	//Commit it to local storage
	localStorage.setItem("shruthi",
		shruthiSelect[selectedIndex].value);
}

mySetItem = function(elementName, value)
{
	// alert("setting " + elementName + " to " + value);
	localStorage.setItem(elementName,value);
	// alert(elementName + " set to " + localStorage.getItem(elementName));
}
	
setElementStorage = function(elementName, defaultValue)
{
	element = localStorage.getItem(elementName);
	if (element === null)
	{
		element = defaultValue;
		localStorage.setItem(elementName, element);
	}
		
	// Set the selected item in the selector
	elementSelect = document.getElementById(elementName);
	var i, option;

	for(i = 0; i < elementSelect.length; i++)
	{
		option = elementSelect[i];
   		if (option.value === element)
   		{
			elementSelect[i].selected = true;
		}
	}
}

window.onload = function()
{
	setElementStorage("language", "kannada");
	setElementStorage("shruthi", "1.5");
	language = localStorage.getItem("language");
	/* alert("language=" + language); */
	
	thumbNails = document.getElementById('videos');
	/* alert("thumbNails =" + thumbNails); */
	thumbNails.innerHTML = "";
	
	// API for get requests
   	let fetchRes = fetch("../Videos.json");
   	// fetchRes is the promise to resolve
	// it by using.then() method
   	fetchRes.then(res =>res.json()).then(d =>
   	{
		/* alert(d.Videos.length); */
		for (let i = 0; i < d.Videos.length; i++)
		{
			/* alert("Video[" + i + "]= " + d.Videos[i]["english"]); */
			link = '<a href="googleVideo.html" target="_blank "' +
		   				'onclick="mySetItem(\'Video\',\'' + d.Videos[i].name + '\')">' +
   						'<img src="../Videos/' + d.Videos[i].name + '/' + language + '.png">' +
   						'<div class="caption">' + d.Videos[i][language] + '</div>' +
   					'</a>'
   			thumbNails.innerHTML += link;
		}
    });
}