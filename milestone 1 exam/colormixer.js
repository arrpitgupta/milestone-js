// Function to mix two colors
function mixColors(color1, color2) {
    // Convert color strings to RGB values
    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);
  
    // Calculate the average of each RGB component
    var avgRed = Math.round((rgb1.r + rgb2.r) / 2);
    var avgGreen = Math.round((rgb1.g + rgb2.g) / 2);
    var avgBlue = Math.round((rgb1.b + rgb2.b) / 2);
  
    // Convert the average RGB values back to a hex color string
    var mixedColor = rgbToHex(avgRed, avgGreen, avgBlue);
  
    return mixedColor;
  }
  
  // Function to convert a hex color string to RGB values
  function hexToRgb(hex) {
    var bigint = parseInt(hex.slice(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
  
    return {
      r: r,
      g: g,
      b: b
    };
  }
  
  // Function to convert RGB values to a hex color string
  function rgbToHex(r, g, b) {
    var hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + ("000000" + hex).slice(-6);
  }
  
  // Example usage
  var color1 = "#ff0000"; // Red
  var color2 = "#0000ff"; // Blue
  
  var mixedColor = mixColors(color1, color2);
  console.log("Mixed Color:", mixedColor);
  