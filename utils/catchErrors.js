function catchErrors(error, displayError) {
    let errorMsg
    if (error.response) {
        // The request was mane and the server responsed with a 
        // status code that is not in the range of 2XX
        errorMsg = error.response.data
        console.error("Error response", errorMsg)

        // For Cloudinary image uploads
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message
            console.error("Error response", errorMsg)
        }
    } else if (error.request) {
        // The request was made, but no response was received
        errorMsg = error.request
        console.error("Error response", errorMsg)
    } else {
        // Something else happened in making the request that 
        // triggered an error
        errorMsg = error.message
        console.error("Error response", errorMsg)
    }
    displayError(errorMsg)
}

export default catchErrors