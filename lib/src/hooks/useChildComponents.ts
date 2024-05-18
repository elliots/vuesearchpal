import { VNode, FunctionalComponent, h } from "vue";
import { ec } from "../../utils";

export function useChildComponents<P extends {} = {}>(
  children: VNode[],
  component: FunctionalComponent<P>
) {
  type Props = P;

  function getChildren() {
    function getChildrenArr(
      childElements: VNode[],
      arr: VNode<Props>[]
    ) {
      function isComponent(
        obj: VNode
      ): obj is VNode<Props> {
        return obj.type === component;
      }
      childElements.forEach((child) => {
        if (isComponent(child)) arr.push(child);
        if (hasChildren(child)) getChildrenArr(child.children as VNode[], arr);
      });
    }
    const results: VNode<Props>[] = [];
    getChildrenArr(children, results);
    return results.map((el, i) =>
      h(component, {
        ...(el.props ? el.props : ({} as Props)),
        key: ec(el.key, i + 1),
      })
    );
  }

  return getChildren();
}

function hasChildren(
  obj: VNode
): obj is VNode<{ children?: VNode[] }> {
  return !!(obj.children && obj.children.length);
}
