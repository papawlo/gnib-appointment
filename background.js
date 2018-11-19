// Retrieve tweets using jsonp.
var script = document.createElement("script");
script.src = 'https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getAppsNear)?readform&cat=Other&sbcat=All&typ=Renewal&k=B3DD067E2DFE8A30EF75D9D4BE10C2A7&p=19199B0E68C699CF16065B5A2F715B3D&_=1541687396826';
document.body.appendChild(script);

function fetchTweets(data) {
  var tweet;
  var i = data.length;
  while (i--) {
    tweet = data[i];
    if (window.webkitNotifications.checkPermission() == 0) {
      window.webkitNotifications.createNotification(
          tweet.user.profile_image_url, tweet.user.name,
          tweet.text).show(); // note the show()
    } else {
      // Note that we can't call requestPermission from here as we are in the
      // callback function and not triggered just on user action
      console.log('You have to click on "Set notification permissions for this page" ' +
                  'first to be able to receive notifications.');
      return;
    }
  }
}