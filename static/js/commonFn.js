function axiosPostRequst(url, data, NODE_ENV) {
  var baseUrl;
  var href = window.location.host;
  baseUrl = "";
  let result = axios({
    method: "post",
    url: baseUrl + url,
    data: data,
    transformRequest: [
      function (data) {
        let ret = "";
        for (let i in data) {
          ret +=
            encodeURIComponent(i) + "=" + encodeURIComponent(data[i]) + "&";
        }
        return ret;
      },
    ],
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale:
        NODE_ENV && NODE_ENV !== "prod"
          ? getCookie("locale-" + NODE_ENV)
          : getCookie("locale"),
    },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return result;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}
