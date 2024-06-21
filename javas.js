function person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = this.place;
  this.display = function () {
    console.log("name: " + this.name + " age: " + this.age);
  };
}

var joel = new person("joel", 17, "adi");
var bol = new person("boll", 57, "idi");

joel.display();
bol.display();
