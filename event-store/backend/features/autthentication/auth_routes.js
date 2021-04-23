import express from 'express'
import authService from './auth_services'

const router = express.Router()

router.route('/user').post(authService.register)
router.route('/user/:userId').post(authService.getUserInfo)
router.route('/auth-signin' ).post(authService.signIn)
router.route('/auth-signout').get( authService.signOut)
router.param('userId', authService.userByID)

export default router

