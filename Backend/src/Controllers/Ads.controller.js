import Ads from "../Models/Ads.model.js";

// 1. Get all ads (Sath hi automatic expiry check bhi run hoga)
export const getAllAds = async (req, res) => {
    try {
        // Automatic Expiry Check: Agar expiry date nikal chuki hai aur status Active hai, toh use Inactive kar do
        const currentDate = new Date();
        await Ads.updateMany(
            { expiryDate: { $lt: currentDate }, adStatus: "Active" },
            { $set: { adStatus: "Inactive" } }
        );

        // Saari ads fetch karo (latest first)
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

// 2. Create Ad
export const createAd = async (req, res) => {
    try {
        const ad = await Ads.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Ad created successfully",
            ad
        });
    } catch (error) {
        console.error("Error creating ad:", error);
        return res.status(500).json({ message: error.message });
    }
};

// 3. Update Ad
export const updateAd = async (req, res) => {
    try {
        const ad = await Ads.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Ad updated successfully",
            ad
        });
    } catch (error) {
        console.error("Error updating ad:", error);
        return res.status(500).json({ message: error.message });
    }
};

// 4. Delete Ad
export const deleteAd = async (req, res) => {
    try {
        const ad = await Ads.findByIdAndDelete(req.params.id);

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Ad deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting ad:", error);
        return res.status(500).json({ message: error.message });
    }
};
