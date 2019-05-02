"use strict";

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [new Contact("Mirjana", "kulics.mirjana@gmail.com", 123, "self")];
  }
  add(info) {
    this.contacts.push(info);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1)
  }

  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}
let book = new AddressBook;
while (true) {
  let choice = prompt("Do you want to add, delete, print, or quit?");
  if (choice === "add") {
    let name = prompt("Name");
    let email = prompt("Email");
    let phone = prompt("Phone");
    let relation = prompt("Relation");
    book.add(new Contact(name, email, phone, relation));
  }
  else if (choice === "delete") {
    let remove = prompt("What index do you want to delete?");
    book.deleteAt(remove);
  }
  else if (choice === "print") {
    book.print();
  }
  else if (choice === "quit") {

    console.log("See you later");
    break;
  }
  else {
    console.log("Bye");
    break;
  }
} 