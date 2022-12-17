const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const v1Router = require("./src/v1/routes/index");
const session = require("express-session");
require("./src/utils/passport_config");
require("./src/middleware/google_auth_middleware");
const app = express();
dotenv.config({ path: "config.env" });

app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(passport.initialize());
app.use(passport.session());
app.use(v1Router);

app.get("/", (req, res) => {
  res.send('<button><a href="/auth/google">Login with Google</a></button>');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
