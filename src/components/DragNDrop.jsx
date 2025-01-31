import React, { useState, useRef } from "react";

export default function DragNDrop() {
    const containerRef = useRef < HTMLDivElement > null; // 드래그 할 영역 네모 박스 Ref
    const dragComponentRef = useRef < HTMLDivElement > null; // // 움직일 드래그 박스 Ref
    const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
    const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
    const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값

    const dragStartHandler = (e: any) => {
        const blankCanvas: any = document.createElement("canvas");
        blankCanvas.classList.add("canvas");
        e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
        document.body?.appendChild(blankCanvas); // 투명 캔버스를 생성하여 글로벌 아이콘 제거
        e.dataTransfer.effectAllowed = "move"; // 크롬의그린 +아이콘 제거
        const originPosTemp = { ...originPos };
        originPosTemp["x"] = e.target.offsetLeft;
        originPosTemp["y"] = e.target.offsetTop;
        console.log("originPosTemp", originPosTemp);
        setOriginPos(originPosTemp); //드래그 시작할때 드래그 전 위치값을 저장

        const clientPosTemp = { ...clientPos };
        clientPosTemp["x"] = e.clientX;
        clientPosTemp["y"] = e.clientY;
        setClientPos(clientPosTemp);
    };
    const dragHandler = (e: any) => {
        const PosTemp = { ...pos };
        PosTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
        PosTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
        setPos(PosTemp);

        const clientPosTemp = { ...clientPos };
        clientPosTemp["x"] = e.clientX;
        clientPosTemp["y"] = e.clientY;
        setClientPos(clientPosTemp);
    };
    const dragOverHandler = (e: any) => {
        e.preventDefault(); // 이미지 제거
    };
    const dragEndHandler = (e: any) => {
        if (!isInsideDragArea(e)) {
            const posTemp = { ...pos };
            posTemp["left"] = originPos.x;
            posTemp["top"] = originPos.y;
            setPos(posTemp);
        }
        // 캔버스 제거
        const canvases = document.getElementsByClassName("canvas");
        for (let i = 0; i < canvases.length; i++) {
            let canvas = canvases[i];
            canvas.parentNode?.removeChild(canvas);
        }
        // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
        document.body.removeAttribute("style");
    };
    return (
        <div className="container" ref={containerRef}>
            <div
                className="drag-component"
                ref={dragComponent}
                draggable
                onDragStart={(e) => dragStartHandler(e)}
                onDrag={(e) => dragHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                style={{ left: pos.left, top: pos.top }}
            >
                drag me!
            </div>
        </div>
    );
}
