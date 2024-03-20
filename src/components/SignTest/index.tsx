import React, { useEffect, useRef, useState } from "react";

//test
import getTouchPos from "../../utils/getTouchPos";
import getMousePos from "../../utils/getMousePos";
import { useAtom } from "jotai";
import { signAtom } from "../../SignData";

const canvasSize = 500;

const SignFile = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [_, setSignData] = useAtom(signAtom);
  const [positionCatch, setPositionCatch] = useState<
    ({ x: number; y: number } | "stop")[]
  >([]);

  useEffect(() => {
    const refCurrent = canvasRef.current;
    setCanvas(refCurrent);
    if (!!refCurrent) setCtx(refCurrent.getContext("2d"));
  }, [canvasRef]);

  /** 開始 */
  const handleTouchStart = (event: React.TouchEvent) => {
    if (!canvas) return;
    setDrawing(true);
    const touchPos = getTouchPos(canvas, event);
    // ctx && ctx.beginPath(touchPos.x, touchPos.y);
    if (!!ctx) {
      ctx.beginPath();
      setPositionCatch((pre) => [...pre, { x: touchPos.x, y: touchPos.y }]);
      ctx.moveTo(touchPos.x, touchPos.y);
    }
    event.preventDefault();
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!canvas) return;
    setDrawing(true);
    const mousePos = getMousePos(canvas, event);
    if (!!ctx) {
      ctx.beginPath();
      setPositionCatch((pre) => [...pre, { x: mousePos.x, y: mousePos.y }]);
      ctx.moveTo(mousePos.x, mousePos.y);
    }
    event.preventDefault();
  };

  const draw = (position: { x: number; y: number }, record: boolean) => {
    if (!!ctx) {
      ctx.lineWidth = 2;
      ctx.lineCap = "round"; // 繪制圓形的結束線帽
      ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
      ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
      ctx.shadowColor = "black"; // 邊緣顏色
      ctx.lineTo(position.x, position.y);
      record &&
        setPositionCatch((pre) => [...pre, { x: position.x, y: position.y }]);
      ctx.stroke();
    }
  };

  /** 移動 */
  const handleTouchMove = (event: React.TouchEvent) => {
    if (!drawing || !canvas) return;
    const touchPos = getTouchPos(canvas, event);
    draw(touchPos, true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!drawing || !canvas) return;
    const mousePos = getMousePos(canvas, event);
    draw(mousePos, true);
  };

  /** 結束 */
  const handleTouchEnd = (_event: React.TouchEvent) => {
    setPositionCatch((pre) => [...pre, "stop"]);
    setDrawing(false);
  };

  const handleMouseUp = (_event: React.MouseEvent) => {
    setPositionCatch((pre) => [...pre, "stop"]);
    setDrawing(false);
  };

  /** 清除 */
  const handleClear = () => {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  /** 轉圖片 */
  const handleConvertToImage = () => {
    if (!canvas) return;
    const image = canvas.toDataURL();
    setSignData(image);
    setSrc(image);
  };

  const rePaint = () => {
    if (!canvas) return;
    const intervalTime = 5000 / positionCatch.length;
    const startPoint = positionCatch[0];
    setDrawing(true);
    if (!!ctx && startPoint !== "stop") {
      ctx.beginPath();
      ctx.moveTo(startPoint.x, startPoint.y);
      let index = 1;
      const repainting = setInterval(() => {
        const prePoint = positionCatch[index - 1];
        const nowPoint = positionCatch[index];
        if (index >= positionCatch.length) {
          console.log(index);
          clearInterval(repainting);
          setDrawing(false);
        }
        if (nowPoint === "stop") {
          setDrawing(false);
        } else if (prePoint === "stop") {
          setDrawing(true);
          ctx.beginPath();
          ctx.moveTo(nowPoint.x, nowPoint.y);
        } else {
          draw(nowPoint, false);
        }

        index++;
      }, intervalTime);
    }
  };

  return (
    <div>
      <canvas
        style={{ background: "#EEE" }}
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <div>
        <button onClick={handleClear}>清除</button>
        <button onClick={handleConvertToImage}>轉圖</button>
        <button onClick={() => setPositionCatch([])}>清除路徑紀錄</button>
        <button onClick={rePaint}>重新繪製</button>
      </div>
      {src && (
        <img
          src={src}
          alt="signImage"
          style={{ color: "#FFF", border: "none" }}
        />
      )}
    </div>
  );
};

export default SignFile;
