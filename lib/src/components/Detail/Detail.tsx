import React, { FunctionComponent } from "react";
import { defineComponent } from 'vue';
import { DetailProps } from "../../../types";
import { Label, Value } from "./Detail.styled";
import { Link } from "../Search/Link";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    href: String,
    value: {
      type: [String, Number, Object],
      required: true
    }
  },
  setup(props) {
    return () => (
      <>
        <Label>{props.label}</Label>
        <Value>
          <Link href={props.href} target="_blank">
            {props.value}
          </Link>  
        </Value>
      </>
    );
  }
});
