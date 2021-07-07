const { Contact } = require("../models");

const getContacts = (query) => {
  return Contact.find(query);
};

const getContactById = (filter) => {
  return Contact.findOne(filter);
};

const addContact = (newContact) => {
  return Contact.create(newContact);
};

const removeContact = (id) => {
  return Contact.findByIdAndDelete(id);
};

const updateContact = (id, status) => {
  return Contact.findByIdAndUpdate(id, status);
};

const updateStatusContact = (id, status) => {
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
