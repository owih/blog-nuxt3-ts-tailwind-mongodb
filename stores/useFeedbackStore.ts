import { defineStore } from 'pinia'
import Feedback from '~/types/feedback'

export const useFeedbackStore = defineStore('feedback', () => {
  const pending = ref<boolean>(false)
  const fetchError = ref<string>('')
  const fetchSuccess = ref<string>('')

  const getPending = computed(():boolean => pending.value as boolean)
  const getSuccess = computed(():string => fetchSuccess.value as string)
  const getError = computed(():string => fetchError.value as string)

  async function sendFeedbackToBD (formData:Feedback) {
    pending.value = true
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
})
