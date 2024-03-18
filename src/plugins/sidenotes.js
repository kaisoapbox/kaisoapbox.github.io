import { visit, SKIP } from "unist-util-visit";
import { h } from "hastscript";

export function rehypeSidenotes() {
  return (tree) => {
    // get data from footnotes section
    const sidenotes = [];
    visit(tree, { tagName: "section" }, (node, index, parent) => {
      if (node.properties.className.includes("footnotes")) {
        // remove sr-only class from footnotes heading
        node.children[0].properties.className = [];
        // iterate over ol and get all the footnotes
        node.children[2].children.forEach((element) => {
          if (element.type === "element") {
            // clone footnote and convert into sidenote
            const newSidenote = structuredClone(element.children[1]);
            newSidenote.tagName = "span";
            newSidenote.properties.className = `sidenote-${
              sidenotes.length % 2 ? "left" : "right"
            }`;
            newSidenote.children.splice(
              0,
              0,
              h("b", `${sidenotes.length + 1}. `)
            );
            // drop last element, should be the footnote backref
            newSidenote.children.pop();
            sidenotes.push(newSidenote);
          }
        });
        // add horizontal divider
        node.children.splice(0, 0, h("hr"));
        // delete footnotes section
        // parent.children[index] = h();
      }
    });
    // TODO: currently assumes all superscript elements are footnotes
    visit(tree, { tagName: "sup" }, (node, index, parent) => {
      node.children[0].properties.className = ["footnote-ref"];
      node.children = [h("b", node.children)];
      const nextSidenote = sidenotes.shift();
      parent.children.splice(index + 1, 0, nextSidenote);
      return SKIP;
    });
    return tree;
  };
}
