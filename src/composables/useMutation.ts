import { ref } from 'vue';
import type { Ref } from 'vue';

interface IMutationActions {
  mutationFn: Function;
  onSuccess?: Function;
  onError?: Function;
}
export const useMutation = ({ mutationFn, onSuccess, onError }: IMutationActions) => {
  const data = ref();
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<unknown | null> = ref(null);
  const mutation = async (...args: {}[]) => {
    isLoading.value = true;
    try {
      data.value = await mutationFn(...args);
      error.value = null;
      onSuccess?.(data.value);
    } catch (e) {
      console.error('useMutation caught error:', e);
      error.value = e;
      onError?.(error.value);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    data,
    isLoading,
    error,
    mutation
  };
};
