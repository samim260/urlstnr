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
module.exports = { shortenUrl, getAllUrl }