const settings = require("../settings");

function getLogin() {  // index 렌더링
  settings.app.get('/', (request, response) => {
    response.render("login", {});
  });
};

module.exports = {
  getLogin
}
