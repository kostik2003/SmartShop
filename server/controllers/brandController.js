const {Brand} = require('../models/models')
const ApiError = require('../errors/ApiError')


class BrandController {
    async create (req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll (req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete (req, res) {

        console.log("id:",req.params.id)
        const {id} = req.params
        const brand = await Brand.findOne({
            where: {id: Number(id)}
        },
    )
    if (brand) {
        brand.destroy(
        )
    }
    return res.json(brand)
    }
}
module.exports = new BrandController()