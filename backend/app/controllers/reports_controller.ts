import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import ReportService from '#services/ReportService'
import { IStartReportInitData } from '#entities/interfaces/Shared'
import logger from '@adonisjs/core/services/logger'
import { IReport } from '#entities/interfaces/IReport'

@inject()
export default class ReportsController {
  constructor(private readonly reportService: ReportService) {}

  public async startReport({ request, response }: HttpContext): Promise<void> {
    try {
      const initData = request.body() as IStartReportInitData
      await this.reportService.startReport(initData)
      response.status(201).json(true)
    } catch (error) {
      logger.error(error)
      console.log(error)
      response.status(500).json({
        message: 'Report not created',
        error: error.message,
      })
    }
  }

  public async updateReport({ request, response }: HttpContext): Promise<void> {
    try {
      const report = request.body() as IReport
      await this.reportService.updateReport(report)
      response.status(201).json(true)
    } catch (error) {
      logger.error(error)
      console.log(error)
      response.status(500).json({
        message: 'Report not updated',
        error: error.message,
      })
    }
  }

  public async getReport({ request, response }: HttpContext): Promise<void> {
    try {
      const venueId: string = request.input('venueId')
      const report = await this.reportService.getReport(venueId)
      response.status(201).json(report)
    } catch (error) {
      logger.error(error)
      console.log(error)
      response.status(500).json({
        message: 'Reports not found',
        error: error.message,
      })
    }
  }
}
