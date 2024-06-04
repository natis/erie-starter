let platformAndBrowser = navigator.userAgent;
if (platformAndBrowser.match(/Mac/) && navigator.maxTouchPoints) {
	document.body.classList.add('ipad');
} else if (platformAndBrowser.match(/iPhone/i)) {
	document.body.classList.add('iphone');
} else if (platformAndBrowser.match(/Android/i)) {
	document.body.classList.add('android');
} else if (platformAndBrowser.match(/Win32/i)) {
	document.body.classList.add('win');
} else if (platformAndBrowser.match(/Win64/i)) {
	document.body.classList.add('win');
}