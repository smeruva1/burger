const connection = require('../config/connection');

// GET ALL burgerS
const getBurgers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burger', (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }

      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    });
  });
};

// create a burger
/* accepts object parameter => {burger_name: "Baconator" } */
const createBurger = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burger SET ?', burgerObj, (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }
      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    });
  });
};

// UPDATE A burger'S devoured STATUS
// burgerObj => { devoured: true } OR {devoured: false}
const updateBurger = (burgerObj, burgerId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE burger SET ? WHERE id = ?', [burgerObj, burgerId], (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!", code: 404 });
      }

      resolve({ message: 'burger updated successfully!', code: 200 });
    });
  });
};

// DELETE A burger
const deleteBurger = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM burger WHERE id = ?', [burgerId], (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!", code: 404 });
      }

      resolve({ message: 'burger deleted successfully!', code: 200 });
    });
  });
};

module.exports = { getBurgers, createBurger, updateBurger, deleteBurger };
