class Controller {
  constructor(Item, itemDetail) {
    this.Item = Item //our actual model
    this.itemDetail = itemDetail //description about the model
  }
  //list
  list = async (req, res) => {
    try {
      const allItems = await this.Item.findAll()
      res.json(allItems)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  //create
  create = async (req, res) => {
    try {
      const newItem = await Item.create(req.body)
      res.status(201).json(newItem)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  //update
  update = async (req, res) => {
    const { id } = req.params
    try {
      const foundItem = await this.Item.findByPk(id)
      if (foundItem) {
        await foundItem.update(req.body)
        res.status(202).json({ message: 'Updated!', payload: foundItem })
      } else {
        res.status(404).json({ message: `${this.itemDetail} Not Found :(` })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  //delete
  destory = async (req, res) => {
    const { id } = req.params
    try {
      const foundItem = await this.Item.findByPk(id)
      if (foundItem) {
        await foundItem.destroy()
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'Error while deleting' })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
module.exports = Controller
