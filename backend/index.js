const PORT = 8000;
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const upload = require("./multer");
const { productSchema } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("hi there")
})


app.use("/images", express.static("upload/images"))
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://localhost:${PORT}/images/${req.file.filename}`
    })
})

app.post("/addproduct", async (req, res) => {
    const allProducts = await productSchema.find({});
    let id;
    if (allProducts.length > 0) {
        let lastProduct = allProducts[(await allProducts).length - 1]
        id = lastProduct.id + 1
    } else {
        id = 1
    }
    const product = new productSchema({
        id: id,
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        old_price: req.body.old_price,
        new_price: req.body.new_price,
    })

    console.log(product)
    await product.save()
    res.json({
        msg: "Product Added",
        product_name: req.body.name
    })
})

app.post("/deleteproduct", async (req, res) => {
    await productSchema.findOneAndDelete({ id: req.body.id })
    console.log("product removed!!");
    res.json({
        msg: " deleted successfully!!",
        name: req.body.name
    })
})

app.get("/allproducts", async (req,res)=>{
    let allProducts = await productSchema.find({})
    res.send(allProducts)
    console.log("Products fetched!!");
})


app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server Running On Port " + PORT);
    }
    else {
        console.log("error " + err)
    }
})