module.exports = {

    CONTENT:{

        TYPE:{

            JSON:'application/json'
        }
    },
    STATUS_CODES: {

        SUCCESS: 200,
        FILE_NOT_FOUND: 444,
        INTERNAL_SERVER_ERRO: 500
    },
    DEFAULT_PORT: 5555,
    ROUTES: {

        BASE: "/",
        USER: {

            LOGIN: "/login",
            REGISTER: "/register"
        },
    },
}