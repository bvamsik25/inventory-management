import axios from 'axios';

const getInventoryDataURL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";


const InvetoryService = {
    getInventoryData: async () => {
        return  await axios.get(getInventoryDataURL);
    }
}

export default InvetoryService