import { postFeedback } from '~/server/repositories/feedbackRepository'
import Feedback from '~/types/feedback'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if ((!body.name || body.name.length < 3) || (!body.email || body.email.length < 5)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Wrong form data'
    })
  }
  return await postFeedback(body) as Feedback | null
})
