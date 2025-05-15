import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    return inertia.render('home')
  }

}