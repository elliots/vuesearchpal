import { FunctionalComponent, AllowedComponentProps, VNode } from "vue";
import { OptionProps, Renderable } from "./gen";

export type LinkProps = AllowedComponentProps & {
  href: string;
  target?: string;
};
export type LinkComponent = FunctionalComponent<LinkProps>;

export type ArrowProps = {
  active: boolean;
  hovered: boolean;
  focused: boolean;
};
export type ArrowComponent = FunctionalComponent<ArrowProps>;

export type MediaProps = Pick<OptionProps, "img" | "label"> & {
  active: boolean;
  hovered: boolean;
  focused: boolean;
};
export type MediaComponent = FunctionalComponent<MediaProps>;

export type PreviewProps = Pick<OptionProps, "label" | "sublabel" | "img"> & {
  media?: VNode;
};
export type PreviewComponent = FunctionalComponent<PreviewProps>;

export type ButtonProps = Pick<OptionProps, "onClick" | "label"> & {
  cta: Renderable;
};
export type ButtonComponent = FunctionalComponent<ButtonProps>;
