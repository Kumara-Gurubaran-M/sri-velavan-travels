// sendMsg.js
import axios from 'axios';

const sendMessage = async (formData) => {
    try {
        const response = await axios.post(
            'https://api.whatsapp.com/send',
            {
                phone: formData.phone,
                message: formData.message,
            }
        );
        console.log(response.data);
        return response.data; // Returning response data for potential future usage
    } catch (error) {
        console.error('Error sending message:', error);
        throw error; // Re-throwing the error for potential handling in the calling code
    }
};

export default sendMessage;
