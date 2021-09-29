const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  "localSignUp",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(
            null,
            false,
            req.flash({ message: "Email already exists" })
          );
        }
        bcrypt.hash(password, saltRounds, (err, hashed) => {
          if (err) {
            console.log(err);
          }
          const newUser = new User();
          newUser.email = email;
          newUser.password = hashed;
          newUser.save((err, user) => {
            if (err) {
              console.log(err);
            }
            return done(null, user);
          });
        });
      });
    }
  )
);

passport.use(
  "localLogin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({ email: email }, (err, doc) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "no user found" });
        }
        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              console.log(err);
              return done(null, false, { message: "password incorrect" });
            }
            return done(null, result);
          });
        }
      });
    }
  )
);
