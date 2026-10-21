import Ads from "../Models/Ads.model.js";

export const getAllAds = async (req, res) => {
    try {
        const ads = await Ads.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            ads
        });
    } catch (error) {
        console.error("Error fetching ads:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

export const createAd = async (req, res) => {
    try {
        const ad = await Ads.create(req.body);
        res.status(201).json(ad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAd = async (req, res) => {
    try {
        const ad = await Ads.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(ad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAd = async (req, res) => {
    try {
        const ad = await Ads.findByIdAndDelete(req.params.id);
        res.status(200).json(ad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
