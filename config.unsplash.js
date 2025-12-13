/**
 * UNSPLASH API CONFIGURATION
 * 
 * Your Unsplash API credentials
 * Get yours at: https://unsplash.com/developers
 */

const UNSPLASH_CONFIG = {
    // Access Key (public) - used for API requests
    ACCESS_KEY: '0MxrzHN86Ygh3Q0J5o_I2gfw0nK2jZE6fn5KZz_t2VI',
    
    // Secret Key (private) - keep this secure, only use server-side
    // Note: For client-side apps, only Access Key is needed
    SECRET_KEY: '_tM3aK5SPergoOdmxsat91AvmT7Ev4Qo2YzSTFVqDjE',
    
    // API Settings
    PHOTOS_PER_REQUEST: 3,
    ORIENTATION: 'landscape',
    IMAGE_SIZE: {
        width: 1200,
        height: 800
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UNSPLASH_CONFIG;
}
