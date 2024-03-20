function getTouchPos(canvas: HTMLCanvasElement, evt: React.TouchEvent) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.touches[0].clientX - rect.left,
    y: evt.touches[0].clientY - rect.top,
  };
}

export default getTouchPos;
