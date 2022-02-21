// Remember me age (in days)
const RE_ME_LENGTH = 14;
const COOKIE_NAME  = "Is_Adult"

const age_query = function () {
  var is_18 = document.getElementById("is_18").checked;
  var re_me = document.getElementById("re_me").checked;

  if (!is_18) {
    window.location.href = 'https://youtu.be/3WmBOcVaKSo?t=13s'
    return
  }

  let expiration = "";

  if (re_me) {
    const date = new Date();
    date.setTime(date.getTime() + (RE_ME_LENGTH * 24 * 60 * 60 * 1000))
    expiration = "; expires=" + date.toUTCString();
  }
  console.log(COOKIE_NAME + "=" + "true" + expiration + "; SameSite = Strict; path=/")
  document.cookie = COOKIE_NAME + "=" + "true" + expiration + "; SameSite = Strict; path=/";
  window.location.href = "/"
};

const age_verification = function () {
  let cookie = decodeURIComponent(document.cookie);

  if (cookie.indexOf(COOKIE_NAME+"=true") == -1) {
    console.log("Age Verification cookie absent!");
    window.location.href = "/age_verification";
    return false
  }
  return true

  // document.cookie = COOKIE_NAME + "=" + "true" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC" + "; SameSite = Strict; path=/"
}

if (window.location.pathname == "/age_verification/") {
  console.log("We're at the verification page!")
} else {
  console.log("Checking age!")
  age_verification()
}