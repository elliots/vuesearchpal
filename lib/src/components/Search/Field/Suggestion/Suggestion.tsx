import { defineComponent, computed } from 'vue';
import { useSearch } from "../../../../context";
import { Content, Text } from "./Suggestion.styled";

export default defineComponent({
  setup() {
    const { suggestion, query } = useSearch();

    const suggest = computed(() => {
      if (suggestion.value) {
        const label = suggestion.value.label;
        const query_ = query.value.toLowerCase();
        const label_ = label.toLowerCase();

        if (label_.includes(query_) && label_.indexOf(query_) === 0) {
          if (query.value.length === label.length) {
            return null;
          }
          return [query.value, label.slice(query.value.length)];
        }
      }
      return null;
    });

    return () => {
      if (suggest.value) {
        return (
          <Content aria-hidden>
            {suggest.value.map((str, i) => (
              <Text visible={i > 0} key={`${i}-${str}`}>
                {str}
              </Text>
            ))}
          </Content>
        );
      }
      return null;
    };
  }
});
