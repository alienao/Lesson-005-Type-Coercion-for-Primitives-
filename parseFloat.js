function parseFloat(str) {
  if (str.match(/^[+-]?(\d*\.)?\d+/)) {
    return Number(str.match(/^[+-]?(\d*\.)?\d+/)[0]);
  }
}
parseFloat("45.8aaaa");
