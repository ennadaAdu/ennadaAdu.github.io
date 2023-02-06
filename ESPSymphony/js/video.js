/********************************************************/
/* video player setup
/********************************************************/
setItem = function(elementName, defaultValue)
{
	element = localStorage.getItem(elementName);
	alert("element= " + elementName + "value = " + element);
	if (element === null)
	{
		element = defaultValue;
		localStorage.setItem(elementName,element);
	}
}

window.onload = function()
{
	setItem("Video", "lambOdhara");
	setItem("shruthi", "1.5");
}

var player = videojs('my_video_1',
{
	playbackRates: [0.5, 0.75, 1, 1.25, 1.5],
		html5:
    	{
			vhs:
			{
				overrideNative: true
			}
		},
		sources: [{
			type: "application/x-mpegURL",
			src: "../Videos/" +
				localStorage.getItem('Video') + "/m" +
				localStorage.getItem('language') + ".m3u8"
  			}]
});

player.play();

player.on('loadeddata', function()
{
	/* videoTracks = player.videoTracks().length;
	alert("Video Tracks = " + videoTracks);
	alert("Video Data loaded"); */
	/* alert("Num Aud Tracks" + player.audioTracks().length);*/
	chosenShruthi = localStorage.getItem("shruthi");
	/* alert("chosenShruthi = " + chosenShruthi); */
	for (let i = 0; i < player.audioTracks().length; i++)
	{
		var myShruthi  = player.audioTracks()[i].label;
		/* alert("Name[" + i + "]= " + myShruthi); */
		if(myShruthi === chosenShruthi)
		{
			player.audioTracks()[i].enabled = true;
			break;
		}
	}
});