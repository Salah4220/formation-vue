import { ref } from 'vue';

export default function useDarkMode() {
  const isDark = ref(false);

  const toggle = () => {
    isDark.value = !isDark.value;
  };

  return { isDark, toggle };
}