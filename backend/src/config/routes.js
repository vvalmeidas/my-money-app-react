const express = require('express');
const auth = require('./auth')

module.exports = function(server) {
    /**
     * Rotas protegidas por token JWT (API PRIVADA/ PASSAM PELO FILTRO AUTH)
     */
    const protectedAPI = express.Router()
    server.use('/api', protectedAPI)

    protectedAPI.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedAPI, '/billingCycles')

    /**
     * Rotas públicas (API ABERTA)
     */
    const openAPI = express.Router()
    server.use('/oapi', openAPI)

    const AuthService = require('../api/user/authService')
    openAPI.post('/login', AuthService.login)
    openAPI.post('/signup', AuthService.signup)
    openAPI.post('/validateToken', AuthService.validateToken)
}