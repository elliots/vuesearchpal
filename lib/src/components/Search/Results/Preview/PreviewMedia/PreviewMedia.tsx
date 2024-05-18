import { defineComponent } from 'vue';
import { MediaComponent } from "../../../../../types";
import styled from "styled-components";
import { classes, mediaQuery } from "../../../../../../utils/css";
import { H2, Paragraph } from "../../../../Typography";

const Media = styled.div`
  margin-bottom: 0.375rem;
  height: 3.5rem;
  width: 3.5rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: rgb(243, 244, 246);
  ${mediaQuery("md")} {
    margin-bottom: 0.5rem;
    height: 4rem;
    width: 4rem;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
`;

export default defineComponent({
  props: {
    img: Object,
    media: Object,
    label: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => {
      if (props.media) return props.media;
      if (props.img) return <Media src={props.img.src} alt={props.img.alt || props.label} />;
      return null;
    };
  }
}) as MediaComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(H2)`
  ${mediaQuery("md")} {
    ${classes.text.size.lg}
    ${classes.text.weight.semibold}
  }
`;

const Subtitle = styled(Paragraph)`
  ${mediaQuery("md")} {
    ${classes.text.size.smd}
  }
`;

const Media = styled.div`
  margin-bottom: 0.375rem;
  height: 3.5rem;
  width: 3.5rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: rgb(243, 244, 246);
  ${mediaQuery("md")} {
    margin-bottom: 0.5rem;
    height: 4rem;
    width: 4rem;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
`;
