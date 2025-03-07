function main() {
    var canvas = document.getElementById('example');
    if (!canvas) {
      console.log('Failed to retrieve the <canvas> element');
      return;
    }
  
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function drawVector(v, color) {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
  
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  
  function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    var v1 = new Vector3([parseFloat(document.getElementById('v1x').value), parseFloat(document.getElementById('v1y').value), 0.0]);
    var v2 = new Vector3([parseFloat(document.getElementById('v2x').value), parseFloat(document.getElementById('v2y').value), 0.0]);
  
    drawVector(v1, "red");
    drawVector(v2, "blue");
  }
  
  function angleBetween(v1, v2) {
    var dotProduct = Vector3.dot(v1, v2);
    var magnitudeProduct = v1.magnitude() * v2.magnitude();
    return Math.acos(dotProduct / magnitudeProduct);
  }
  
  function areaTriangle(v1, v2) {
    var crossProduct = Vector3.cross(v1, v2);
    var parallelogramArea = crossProduct.magnitude();
    return parallelogramArea / 2.0;
  }
  
  function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    var v1 = new Vector3([parseFloat(document.getElementById('v1x').value), parseFloat(document.getElementById('v1y').value), 0.0]);
    var v2 = new Vector3([parseFloat(document.getElementById('v2x').value), parseFloat(document.getElementById('v2y').value), 0.0]);
    var scalar = parseFloat(document.getElementById('scalar').value);
    var operation = document.getElementById('operation').value;
  
    drawVector(v1, "red");
    drawVector(v2, "blue");
  
    if (operation === "add") {
      var v3 = new Vector3(v1.elements);
      v3.add(v2);
      drawVector(v3, "green");
    } else if (operation === "sub") {
      var v3 = new Vector3(v1.elements);
      v3.sub(v2);
      drawVector(v3, "green");
    } else if (operation === "mul") {
      var v3 = new Vector3(v1.elements);
      v3.mul(scalar);
      drawVector(v3, "green");
  
      var v4 = new Vector3(v2.elements);
      v4.mul(scalar);
      drawVector(v4, "green");
    } else if (operation === "div") {
      var v3 = new Vector3(v1.elements);
      v3.div(scalar);
      drawVector(v3, "green");
  
      var v4 = new Vector3(v2.elements);
      v4.div(scalar);
      drawVector(v4, "green");
    } else if (operation === "magnitude") {
      console.log("Magnitude of v1:", v1.magnitude());
      console.log("Magnitude of v2:", v2.magnitude());
    } else if (operation === "normalize") {
      var v1Normalized = new Vector3(v1.elements);
      var v2Normalized = new Vector3(v2.elements);
      v1Normalized.normalize();
      v2Normalized.normalize();
      drawVector(v1Normalized, "green");
      drawVector(v2Normalized, "green");
    } else if (operation === "angle") {
      var angle = angleBetween(v1, v2);
      var angleDegrees = angle * (180 / Math.PI);
      console.log("Angle:", angleDegrees);
    } else if (operation === "area") {
      var area = areaTriangle(v1, v2);
      console.log("Area of triangle:", area);
    }
  }
  