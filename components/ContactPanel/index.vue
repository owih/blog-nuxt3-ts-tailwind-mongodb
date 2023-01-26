<template>
  <div>
    <div class="mb-6 text-xl">
      You can leave me a message that I will read soon and be able to reply.
    </div>
    <form novalidate @submit.prevent="onSubmit">
      <div class="form-item">
        <UIInput v-model="formData.name" :label="'Name'" :required="true" />
        <div v-if="formData.name.length <= 3 && wasValidated" class="mt-3 text-primary">
          The field must contain more than 3 characters
        </div>
      </div>
      <div class="form-item">
        <UIInput v-model="formData.email" :label="'Email/Telegram'" :required="true" />
        <div v-if="formData.email.length <= 5 && wasValidated" class="mt-3 text-primary">
          The field must contain more than 5 characters
        </div>
      </div>
      <div class="form-item">
        <UITextarea v-model="formData.message" :label="'Message'" />
      </div>
      <div class="form-item flex items-center -m-2">
        <div class="p-2">
          <UIButton :text="'Send'" :isDisabled="!isValidated && wasValidated" :isSubmit="true" />
        </div>
        <div class="p-2">
          <span v-if="feedbackStore.getPending.value">
            <Icon name="line-md:loading-twotone-loop" size="22" />
          </span>
          <span v-if="feedbackStore.getSuccess.value" class="text-green">
            {{ feedbackStore.getSuccess }}
          </span>
          <span v-if="feedbackStore.getError.value" class="text-primary">
            {{ feedbackStore.getError }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang='ts'>
import Feedback from '~/types/feedback'

const feedbackStore = useFeedbackStore()
const isValidated = ref<boolean>(false)
const wasValidated = ref<boolean>(false)
const formData = reactive<Feedback>({
  name: '',
  email: '',
  message: ''
})

watch(formData, ():void => {
  isValidated.value = formData.name.length > 3 && formData.email.length > 5
})

const onSubmit = ():void => {
  wasValidated.value = true
  if (!isValidated.value) { return }

  feedbackStore.sendFeedbackToBD(formData)
  wasValidated.value = false
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>
</style>
