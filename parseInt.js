function parseInt(str) {
  if (str.match(/^[^\d]*(\d+)/)) {
    return Number(str.match(/^[^\d]*(\d+)/)[0]);
  }
}
parseInt("45aaaa");
