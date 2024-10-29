class HTTPRequest {
    #xhr;

    constructor() {
        this.#xhr = new XMLHttpRequest();
    }

    GET(url) {
        this.#xhr.open('GET', url, true);
        this.#xhr.send();
        return this;
    }

    POST(url, body) {
        this.#xhr.open('POST', url, true);
        this.#xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
        this.#xhr.send(JSON.stringify(body));
        return this;
    }

    getData(cb) {
        this.#xhr.onload = function () {
            let response = JSON.parse(this.responseText);

            if (this.status >= 200 && this.status < 300) {
                cb(null, response);
            }
            else {
                const error ={...response, statusCode: this.status}
                cb(error, null)
            }
        }
    }
}

export default HTTPRequest;