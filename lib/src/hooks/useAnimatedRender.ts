import { ref, watch } from "vue";

export function useAnimatedRender(
  visible?: boolean | null | undefined,
  duration?: number | null
) {
  const show = ref(false);
  const render = ref(visible === true ? true : false);

  const delay = ref(duration || 150);
  watch(() => duration, (newDuration) => {
    delay.value = newDuration || 150;
  });

  watch(() => visible, (newVisible) => {
    if (newVisible) {
      render.value = true;
      const timer = setTimeout(() => show.value = true, 50);
      return () => clearTimeout(timer);
    } else {
      show.value = false;
      const timer = setTimeout(() => render.value = false, delay.value);
      return () => clearTimeout(timer);
    }
  });

  const transitioning = ref(false);

  watch(show, () => {
    transitioning.value = true;
    const timer = setTimeout(() => transitioning.value = false, delay.value);
    return () => clearTimeout(timer);
  });

  return { render, show, transitioning };
}
