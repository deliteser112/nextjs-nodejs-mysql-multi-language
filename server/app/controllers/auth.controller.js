/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;
// const Role = db.role;
const { ROLES } = db;

// const { Op } = db.Sequelize;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = config.secret;
const JWT_EXPIRES_IN = '5 days';

const ADMIN = 2;
const MEMBER = 4;
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then((userData) => {
      let emailCount = 0;
      let role = ADMIN;
      User.findAll().then((users) => {
        users.map((user) => {
          const reqEmail = req.body.email.split('@')[1].split('.')[0];
          const existEmail = user.email.split('@')[1].split('.')[0];
          if (reqEmail === existEmail) {
            emailCount += 1;
          }
        });

        if (emailCount > 1) role = MEMBER;

        const accessToken = jwt.sign({ userId: userData.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN
        });

        const user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: ROLES[role - 1].toUpperCase()
        };

        // set user role
        userData.setRoles([role]).then(() => {
          res.send({ accessToken, user });
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((userData) => {
      if (!userData) {
        return res.status(400).send({ message: 'auth/user-not-found' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        userData.password
      );

      if (!passwordIsValid) {
        return res.status(400).send({
          accessToken: null,
          message: 'auth/wrong-password'
        });
      }

      const token = jwt.sign({ id: userData.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      let authorities = '';
      userData.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i += 1) {
          authorities = `${roles[i].name.toUpperCase()}`;
        }
        const user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: authorities
        };
        const accessToken = token;
        console.log(user);
        res.status(200).send({ accessToken, user });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
