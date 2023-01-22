import { Feedback } from '@prisma/client'
import prisma from '@/server/database/feedback'

export async function postFeedback (feedback:Feedback): Promise<Feedback> {
  const data = await prisma.feedback.create({
    data: {
      name: feedback?.name,
      email: feedback?.email,
      message: feedback?.message
    }
  })
  return feedback
}
