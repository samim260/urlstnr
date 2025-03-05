const { v4 } = require('uuid');
const db = require("../models/index")
const { successResponse, errorResponse } = require('../utils/index')

const shortenUrl = async (req, res) => {
    const urlModal = db.Urls;
    try {
        const { url } = req.body
        if (!url) {
            return errorResponse(res, "Url is required", 400)
        }
        const short_url = v4()
        const shortUrl = await urlModal.create({
            url,
            short_url,
            user_id: req.token_data.id
        })
        successResponse(res, "url shorten successfully", 201, {
            id: shortUrl.id,
            short_url: shortUrl.short_url,
            user_id: shortUrl.user_id
        })
    } catch (error) {
        errorResponse(res, "something went wrong", 500)
    }
}
const getAllUrl = async (req, res) => {
    const urlModal = db.Urls;
    try {
        const urls = await urlModal.findAll({
            where : {user_id : req.token_data.id}
        })
        successResponse(res, "", 200, urls)
    } catch (error) {
        errorResponse(res, "something went wrong", 500)
    }
}
const getUrlById = async (req, res) => {
    const urlModal = db.Urls;
    try {
        const url = await urlModal.findByPk(req.params.id)
        if (!url) {
            return errorResponse(res, "no url with this id found", 404)
        }
        successResponse(res, "url found", 200, url)
    } catch (error) {
        errorResponse(res, "something went wrong", 500)
    }
}
const updateUrlById = async (req, res) => {
    const urlModal = db.Urls;
    try {
        const newUrl = req.body.url
        if(!newUrl){
            return errorResponse(res, "please provide a valid url", 400)
        }
        const updatedData = await urlModal.update(
            { url: newUrl},
            { where: { id: req.params.id }, returning : true }
        )
        successResponse(res, "url updated successfully", 200, updatedData[1])
    } catch (error) {
        errorResponse(res, "something went wrong", 500)
    }
}
const deleteUrlById = async (req, res)=>{
    const urlModal = db.Urls;
    try {
        const url = await urlModal.findOne({
            where : {id : req.params.id}
        })
        if(!url){
            return errorResponse(res, "no url found", 404);
        }
        await url.destroy();
        successResponse(res, "url deleted successfully", 200)

    } catch (error) {
        console.log(error.message)
        errorResponse(res, "something went wrong", 500)
    }
}

module.exports = { shortenUrl, getAllUrl, getUrlById, updateUrlById, deleteUrlById}