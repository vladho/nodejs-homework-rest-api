const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const path = require("path")
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
 try {
   const file = await fs.readFile(contactsPath)
        const data = JSON.parse(file)
        // console.table(data)
        return data
 } catch (error) {
   error.message = "listContacts error";
        throw new Error(error.message)
    }
}

const getContactById = async (contactId) => {}

const removeContact = async (contactId) => {}

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
