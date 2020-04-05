import mongoose from 'mongoose';
import shotrid from 'shortid'

const { String, Number } = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        default: shotrid.generate()
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)