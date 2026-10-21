import Ads from "../Models/Ads.model.js";

// Get all ads with automatic expiry check
export const getAllAds = async (req, res) => {
    try {
        const currentDate = new Date();
        await Ads.updateMany(
            { expiryDate: { $lt: currentDate }, adStatus: "Active" },
            { $set: { adStatus: "Inactive" } }
        );

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

// Create Ad with Expiry Days Calculation
export const createAd = async (req, res) => {
    try {
        const { expiryDays, ...restData } = req.body;
        
        // Agar days diye hon toh calculate karein, warna default 7 days set kardein
        const days = Number(expiryDays) || 7;
        const expiryDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

        const ad = await Ads.create({
            ...restData,
            expiryDate
        });

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

// Update Ad with Expiry Days Calculation
export const updateAd = async (req, res) => {
    try {
        const { expiryDays, ...restData } = req.body;
        
        let updatePayload = { ...restData };
        
        // Agar naye days enter hue hain toh expiry date recalculate karein
        if (expiryDays) {
            const days = Number(expiryDays);
            updatePayload.expiryDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
        }

        const ad = await Ads.findByIdAndUpdate(
            req.params.id, 
            updatePayload, 
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
        return res.status(500).json({ message: "Server Error" });
    }
};

// Delete Ad
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
