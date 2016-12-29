function logWithColor(colorFunc, msg) {
  if (typeof(msg) == 'object') {
    console.log(colorFunc('\n' + JSON.stringify(msg, null, 2)));
  } else {
    console.log(colorFunc(msg));
  }
}

function logTraceWithColor(colorFunc, msg) {
  console.log(colorFunc("\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BEGIN"));
  if (typeof(msg) == 'object') {
    console.trace(colorFunc('\n' + JSON.stringify(msg, null, 2)));
  } else {
    console.trace(colorFunc(msg));
  }
  console.log(colorFunc(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END\n"));
}

module.exports = {
  logWithColor,
  logTraceWithColor
}
