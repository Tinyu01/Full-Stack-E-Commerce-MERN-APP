import SummaryApi from "../common"

/**
 * Fetches products based on the given category.
 *
 * @async
 * @function fetchCategoryWiseProduct
 * @param {string} category - The category for which to fetch products.
 * @returns {Promise<Object>} The response data containing products for the specified category.
 * @throws {Error} If the fetch operation fails.
 */
const fetchCategoryWiseProduct = async(category)=>{
    try {
        console.log('Fetching category wise products for:', category);
        console.log('API config:', SummaryApi.categoryWiseProduct);
        
        const response = await fetch(SummaryApi.categoryWiseProduct.url,{
            method : SummaryApi.categoryWiseProduct.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                category : category
            })
        })

        const dataResponse = await response.json()
        console.log('Category wise product response:', dataResponse);

        return dataResponse
    } catch (error) {
        console.error('Error fetching category wise products:', error);
        throw error;
    }
}

export default fetchCategoryWiseProduct