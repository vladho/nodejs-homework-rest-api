const { Contact } = require("../models");

const getContacts = (query) => {
  return Contact.find(query);
};

const getContactById = (id) => {
  return Contact.findById(id);
};

const addContact = (body) => {
  return Contact.create(body);
};

const removeContact = (id) => {
  console.log(id);
  return Contact.findByIdAndDelete(id);
};

const updateContact = (id, status) => {
  console.log(status);
  return Contact.findByIdAndUpdate(id, status);
};

const updateStatusContact = (id, status) => {
  console.log(status);
  return Contact.findByIdAndUpdate(id, status);
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
