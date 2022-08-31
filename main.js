const settings = require("./server/settings");
const login = require("./server/route/login");

login.getLogin();


settings.app.listen(settings.port, () => {
  console.log(`서버가 ${ settings.port } 포트로 개방되었습니다.`);
});
