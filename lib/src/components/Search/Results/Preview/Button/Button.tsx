import { defineComponent } from 'vue';
import { useSearch } from "../../../../../context";
import { ButtonComponent } from "../../../../../types";
import styled from "styled-components";
import { getVar } from "../../../../../../utils/css";
import { Span } from "../../../../Typography";

const Label = styled(Span)`
  position: relative;
  z-index: 5;
  /* text-transform: uppercase; */
  display: inline-flex;
  align-items: center;
  color: ${getVar("accent-txt")};
`;

const ButtonBase = styled.button`
  padding: 0.7rem 0.8rem;
  width: 100%;
  transition: 250ms;
  background-size: 200% auto;
  border-radius: 10px;
  display: block;
  border: 0px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  background-color: ${getVar("accent")};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    background: linear-gradient(
      30deg,
      transparent 0%,
      transparent 20%,
      #fff 60%,
      transparent 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  &:hover {
    background-position: right center;
    text-decoration: none;
    &::after {
      transform: scaleX(1.5) translateX(-10%);
      opacity: 0.2;
    }
  }
  &:active {
    transform: scale(0.975);
  }
`;

export default defineComponent({
  props: {
    cta: {
      type: [String, Object],
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { link: Link } = useSearch();

    const button = (
      <ButtonBase onClick={props.onClick} type="button">
        <Label weight="bold" truncate align="center">
          {props.cta}
        </Label>
      </ButtonBase>
    );

    return () => {
      if (Link) {
        return <Link href={`/${props.label}`}>{button}</Link>;
      }
      return button;  
    };
  }
}) as ButtonComponent;

const Label = styled(Span)`
  position: relative;
  z-index: 5;
  /* text-transform: uppercase; */
  display: inline-flex;
  align-items: center;
  color: ${getVar("accent-txt")};
`;

const ButtonBase = styled.button`
  padding: 0.7rem 0.8rem;
  width: 100%;
  transition: 250ms;
  background-size: 200% auto;
  border-radius: 10px;
  display: block;
  border: 0px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  background-color: ${getVar("accent")};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    background: linear-gradient(
      30deg,
      transparent 0%,
      transparent 20%,
      #fff 60%,
      transparent 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  &:hover {
    background-position: right center;
    text-decoration: none;
    &::after {
      transform: scaleX(1.5) translateX(-10%);
      opacity: 0.2;
    }
  }
  &:active {
    transform: scale(0.975);
  }
`;
