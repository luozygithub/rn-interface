import axios from "axios";
// 请求超时时间
const REQUEST_TIMEOUT = 10000;
// 消息延迟
const MSG_TIMEOUT = 3 * 1000;
// 服务器IP
const SERVER_ADDRESS = 'static.edu.sdanshu.com'
// 服务器端口
const SERVER_PORT = 80;

// 静态资源地址
const STATIC_ADDRESS = 'https://static.edu.sdanshu.com'
//静态资源端口
const RESOURCE_PORT = 8386;
// 服务器地址
// const BASE_URL = `http://${SERVER_ADDRESS}:${SERVER_PORT}`
const BASE_URL = 'http://www.rainbowchain.io/'
const headers = {
    // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Content-Type": "application/json",
};
export {
    STATIC_ADDRESS,
    BASE_URL
}
// 表单提交实例
const axio = axios.create({
    baseURL: BASE_URL,
    headers
});

axio.defaults.timeout = REQUEST_TIMEOUT;

//http request 拦截器
axio.interceptors.request.use(
    config => {
        // let token = localStorage.getItem('token')
        let token = sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        if (config.url == "/login") {
            for (var k in config.headers) {
                if (k == "Authorization") {
                    delete config.headers[k];
                }
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
axio.interceptors.response.use(
    response => {
        if (response.headers && response.headers.authorization) {
            let token = response.headers.authorization;
            if (token != "" && token != null) {
                headers.Authorization = token;
            }
        }
        if (response.headers && response.headers.uid) {
            localStorage.setItem("uid", response.headers.uid);
        }
        if (response.data && response.data.code == 401) {
            console.log("401");
            localStorage.removeItem("token");
            sessionStorage.removeItem('token')
            if (location.href.indexOf("/login") === -1) {
                location.href = "#/login?errorMsg=请先登录再进行操作";
            }
        } else if (response.data && response.data.code == 100001) {
            if (location.href.indexOf("/login") === -1) {
                location.href = "#/login?errorMsg=请先登录再进行操作";
            }
        }
        return response;
    },
    error => {
        console.log("请求超时");
        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, data) {
    return new Promise((resolve, reject) => {
        axio({
            method: "get",
            url,
            params: data,
            responseType: "json"
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axio({
            method: "post",
            url,
            data,
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(response => {
                if (url == "/login") {
                    resolve(response);
                }
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * 封装petch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data) {
    return new Promise((resolve, reject) => {
        axio({
            method: "patch",
            url,
            data,
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(response => {
                if (url == "/login") {
                    resolve(response);
                }
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Delete(url, data) {
    return new Promise((resolve, reject) => {
        axio({
            method: "delete",
            url,
            data,
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(response => {
                if (url == "/login") {
                    resolve(response);
                }
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
export {}
