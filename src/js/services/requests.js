const postData = async (url) => {
    let res = await fetch(url, {
        method: "POST",
    });

    return await res.text();
};


export default postData;