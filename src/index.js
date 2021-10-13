function getPixels(node, property) {
  const value = window.getComputedStyle(node).getPropertyValue(property);
  return parseInt(value.replace("px", ""));
}

function getHeight(node) {
  const topBorder = getPixels(node, "border-top-width");
  const bottomBorder = getPixels(node, "border-bottom-width");
  return node.clientHeight + topBorder + bottomBorder;
}

function getWidth(node) {
  const leftBorder = getPixels(node, "border-left-width");
  const rightBorder = getPixels(node, "border-right-width");
  return node.clientWidth + leftBorder + rightBorder;
}

function getNodeSizes(node) {
  return {
    height: getHeight(node),
    width: getWidth(node),
  };
}

module.exports = getNodeSizes;
