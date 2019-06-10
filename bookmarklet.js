if(location.href.includes("facebook") && !location.href.includes("/about")){
var fburl = document.URL;
if(fburl.endsWith("/"))
{document.location = fburl+'about/';} 
else{ document.location = fburl+'/about/'; }
}
else if(location.href.includes("twitter") && !location.href.includes("search")){
 var turl = window.location.pathname;
 var twurl = turl.slice(1); 
 document.location = "https://twitter.com/search?q=%40"+twurl+" email&src=typd";}
else {
  var txt;
  var url=window.location.hostname;
  var sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
  var person = prompt("Please enter full name of the person you're searching for:", "Full Name");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    window.open('https://www.google.com/search?q=email+"' + person + '"+'+ sourceString);
  }
}