const { fsync } = require("fs");
const fs = require("fs/promises");

const { v4 } = require("uuid");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const file = await fs.readFile(contactsPath);
    const result = JSON.parse(file);
    return result;
  } catch (error) {
    error.message = "listContacts error";
    throw new Error(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    const result = data.find(({ id }) => id === +contactId);
    return result;
  } catch (error) {
    error.message = "getContactById error";
    throw new Error(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    const idx = data.findIndex(({ id }) => id === +contactId);
    if (idx === -1) {
      return idx;
    }
    data.splice(idx, 1);
    const dataString = JSON.stringify(data);
    fs.writeFile(contactsPath, dataString);
  } catch (error) {
    error.message = "removeContact error";
    throw new Error(error.message);
  }
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    const newItem = { name, email, phone, id: v4() };
    data.push(newItem);
    const dataString = JSON.stringify(data);
    fs.writeFile(contactsPath, dataString);
  } catch (error) {
    error.message = "addContact error";
    throw new Error(error.message);
  }
};

const updateContact = async (contactId, body) => {
  const { name, email, phone } = body;
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    const idx = data.findIndex(({ id }) => id === +contactId);
    if (idx === -1) {
      return idx;
    }
    data[idx] = { ...data[idx], ...body };
    const dataString = JSON.stringify(data);
    fs.writeFile(contactsPath, dataString);
    return data[idx];
  } catch (error) {
    error.message = "updateContact error";
    throw new Error(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
