import Feedback from '~/types/feedback'

export function postFeedback (formData:Feedback) {
  return useFetch(usePathApi.feedback, {
    method: 'POST',
    body: {
      name: formData.name,
      email: formData.email,
      message: formData?.message
    }
  })
}
