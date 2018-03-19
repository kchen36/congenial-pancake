var svg, width, height;

svg = document.getElementById("svg");
width = svg.getAttribute("width");
height = svg.getAttribute("height");
hours= [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]];
data = [[12,95], [11,97] , [8,78] ,[5,72], [2,65], [1,50], [10,85], [9,75], [6.5,72], [7.5,75]];

var setup = function() {
  var labels = d3.select("svg").selectAll("text").data(hours).enter();
  labels.append("text")
    .attr("x", function(d) { return 40 * d[0] + 45; })
    .attr("y", function() { return 495; })
    .text(function(d) { return d[0]; });
  labels.append("text")
    .attr("x", function() { return 10; })
    .attr("y", function(d, i) { return 38 * i + 75; })
    .text(function(d, i) {
      var n = 100 - i * 10;
      if (n >= 0) {
        return n;
      }});
};

var plot = function() {
  var circles = d3.select("svg").selectAll("circle").data(data).enter();
  circles.append("circle")
    .attr("cx", function(d) { return 40 * d[0] + 50; })
    .attr("cy", function(d) { return 500 - d[1] * 4.2; })
    .attr("r", 5)
    .attr("fill", "red");
  svg.append(circles);
};

setup();
plot();
