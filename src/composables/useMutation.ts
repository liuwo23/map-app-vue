import {ref} from 'vue'
import type {Ref} from 'vue'

export const useMutation = (mutationFn:Function) => {
  const data = ref();
  const isLoading:Ref<boolean> = ref(false);
  const error: Ref<null | unknown> = ref(null)
  const mutation = async(...args:[]) => {

  isLoading.value = true;
    try {
        data.value = await mutationFn(...args);
        error.value = null
      }
      catch (e) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    }
    return {
      data,
      isLoading,
      error,
      mutation
    }
}