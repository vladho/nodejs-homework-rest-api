const express = require('express')
const router = express.Router()
const {  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact} = require("../../model")

router.get('/', async (req, res, next) => {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: await listContacts(),
        }
    })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
