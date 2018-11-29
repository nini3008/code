class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(`${this.email}, just logged in`);
    return this;
  }

  logout() {
    console.log(`${this.email}, just logged out`);
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

const userOne = new User("nick@nick.com", "nicholas");
const userTwo = new User("efe@nick.com", "Efe");
const admin = new Admin("nicholas@nick.com", "nicko");

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);
