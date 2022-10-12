"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./database");
const app_1 = require("./app");
app_1.app.listen(app_1.app.get('port'), () => {
    console.log('Contact Book server running on port', app_1.app.get('port'));
});
