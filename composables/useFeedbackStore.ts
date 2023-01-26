import Feedback from '~/types/feedback'

export default () => {
  const pending = useState<boolean>('pending', () => false)
  const fetchError = useState<string>('fetchError', () => '')
  const fetchSuccess = useState<string>('fetchSuccess', () => '')

  const getPending = computed(():boolean => pending.value)
  const getSuccess = computed(():string => fetchSuccess.value)
  const getError = computed(():string => fetchError.value)

  async function sendFeedbackToBD (formData:Feedback) {
    pending.value = true
    fetchSuccess.value = ''
    fetchError.value = ''
    const { data, error } = await postFeedback(formData)
    pending.value = false
    if (error.value) { fetchError.value = error.value.message }
    if (data.value) { fetchSuccess.value = 'Your message was delivered ;)' }
  }

  return {
    getPending,
    getSuccess,
    getError,
    sendFeedbackToBD
  }
}
