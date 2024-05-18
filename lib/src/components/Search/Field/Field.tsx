import { defineComponent, onMounted, ref, watch } from "vue";

import { useSearch } from "../../../context";
import { useFocus } from "../../../hooks";
import { cn } from "../../../../utils";
import { Suggestion } from "./Suggestion";
import { Container, Input, InputContainer, SvgIcon } from "./Field.styled";
import { Label } from "../../Typography";

export default defineComponent({
  setup() {
    const { show, options, active, query, setQuery, ids, disableHover, label } = useSearch();
    
    const inputRef = ref<HTMLInputElement | null>(null);

    onMounted(() => {
      if (show.value && inputRef.value) {
        inputRef.value.focus();
      }
    });

    watch(show, (newShow) => {
      if (newShow && inputRef.value) {
        inputRef.value.focus();
      }
    });

    const { focus, focusProps } = useFocus(() => disableHover());

    return () => (
      <Container>
        <SvgIcon viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
        </SvgIcon>
        <InputContainer>
          <Label htmlFor={ids.search.value} sr-only>
            {label.value}
          </Label>
          {focus.value && <Suggestion />}
          <Input
            type="text"
            placeholder={label.value}
            ref={inputRef}
            role="combobox"
            aria-expanded={options.value.length > 0}
            aria-controls={ids.options.value}
            id={ids.search.value}
            aria-activedescendant={active.value ? ids.getOptionId(active.value) : undefined}
            value={query.value}
            onInput={(e: Event) => {
              disableHover();
              setQuery((e.target as HTMLInputElement).value);
            }}
            aria-describedby={options.value.length < 1 && query.value ? cn(ids.errors.value) : undefined}
            aria-invalid={options.value.length < 1 && query.value ? true : undefined}
            {...focusProps.value}
            autoComplete="off"
          />
        </InputContainer>
      </Container>
    );
  }
});
