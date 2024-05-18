import { provide, inject, ref } from 'vue';

export type DemoId = 'general' | 'button' | 'link';

export interface DemoValues {
  demo: DemoId | null;
  openDemo: (id: DemoId) => void;
  closeDemo: () => void;
}

const DemosSymbol = Symbol();

export function provideDemos() {
  const demo = ref<DemoId | null>(null);

  function openDemo(id: DemoId) {
    if (demo.value !== id) {
      demo.value = id;
    }
  }

  function closeDemo() {
    demo.value = null;  
  }

  provide(DemosSymbol, {
    demo,
    openDemo,
    closeDemo
  });
}

export function useDemos() {
  const context = inject<DemoValues>(DemosSymbol);

  if (!context) {
    throw new Error('useDemos must be used within a DemosProvider');
  }

  return context;
}
