
document.addEventListener("DOMContentLoaded",function(){

})
//AIzaSyBxGGRXJNIf-SXiDNbm4_Z2hwettmzgzHw
//935775728573-k8nvr8icma7f31lds9gn48ot30eeqnk8.apps.googleusercontent.com
// Client ID and API key from the Developer Console
var CLIENT_ID = '935775728573-k8nvr8icma7f31lds9gn48ot30eeqnk8.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

 /**
  *  On load, called to load the auth2 library and API client library.
  */
 function handleClientLoad() {
   gapi.load('client:auth2', initClient);
 }

 /**
  *  Initializes the API client library and sets up sign-in state
  *  listeners.
  */
 function initClient() {
   var authorizeButton = document.getElementById('authorize-button');
   var signoutButton = document.getElementById('signout-button');
   gapi.client.init({
     discoveryDocs: DISCOVERY_DOCS,
     clientId: CLIENT_ID,
     scope: SCOPES
   }).then(function () {
     // Listen for sign-in state changes.
     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

     // Handle the initial sign-in state.
     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
     authorizeButton.onclick = handleAuthClick;
     signoutButton.onclick = handleSignoutClick;
   })
   .catch(e=>{console.log(e);});
 }

 /**
  *  Called when the signed in status changes, to update the UI
  *  appropriately. After a sign-in, the API is called.
  */
 function updateSigninStatus(isSignedIn) {
   if (isSignedIn) {
     authorizeButton.style.display = 'none';
     signoutButton.style.display = 'block';
     getChannel();
   } else {
     authorizeButton.style.display = 'block';
     signoutButton.style.display = 'none';
   }
 }

 /**
  *  Sign in the user upon button click.
  */
 function handleAuthClick(event) {
   console.log('clied');
   gapi.auth2.getAuthInstance().signIn();
 }

 /**
  *  Sign out the user upon button click.
  */
 function handleSignoutClick(event) {
   gapi.auth2.getAuthInstance().signOut();
 }

 /**
  * Append text to a pre element in the body, adding the given message
  * to a text node in that element. Used to display info from API response.
  *
  * @param {string} message Text to be placed in pre element.
  */
 function appendPre(message) {
   var pre = document.getElementById('content');
   var textContent = document.createTextNode(message + '\n');
   pre.appendChild(textContent);
 }

 /**
  * Print files.
  */
 function getChannel() {
   gapi.client.youtube.channels.list({
     'part': 'snippet,contentDetails,statistics',
     'forUsername': 'GoogleDevelopers'
   }).then(function(response) {
     var channel = response.result.items[0];
     appendPre('This channel\'s ID is ' + channel.id + '. ' +
               'Its title is \'' + channel.snippet.title + ', ' +
               'and it has ' + channel.statistics.viewCount + ' views.');
   });
 }
