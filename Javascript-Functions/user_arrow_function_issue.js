const fixedUser = {
  name: "Harsh",
  showName: function () {
    console.log(this.name);
  },
};

fixedUser.showName();
