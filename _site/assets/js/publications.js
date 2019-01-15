
var request = new XMLHttpRequest();
request.open('GET', 'https://ci-staging01.lib.ncsu.edu/api/v1/authors/tdstoffe', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.citations.forEach(citations => {

        var link

        var div = document.createElement("div");
        div.setAttribute("id", "item")
        div.innerHTML = "<div class='upper-row'><h3 class='presentation-title'><a href='" + citations.source.doi + "'>" + citations.title + "</a></h3>" + "<div class='pub-time'>" + citations.year + "</div></div>" + "<p class='presentation-summary'>" + citations.author + "</p>"

        document.getElementById('container').appendChild(div)

    });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.innerHTML = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
