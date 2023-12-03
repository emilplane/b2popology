export default async function getData(url, noCache) {
    let output = {
        "error": true
    }
    let status;
    try {
        const requestURL = url;
        let request = ``
        if (noCache) {
            request = new Request(requestURL);
        } else {
            request = new Request(requestURL);
        }
        const response = await fetch(request)
        status = response.status
        if (!response.ok) {
            throw new Error(response.status);
        }
        output.data = await response.json();
        output.error = false;
    } catch (error) {
        output.error = true;
        output.status = status;
    }
    return output
}