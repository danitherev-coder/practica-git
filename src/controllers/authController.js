import { request, response } from 'express'

export const registerCTRL = async (req = request, res = response) => {
  res.json({
    msg: 'registerCTRL'
  })
}