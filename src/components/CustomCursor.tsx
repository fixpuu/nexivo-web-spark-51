import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // References to the DOM elements directly to bypass React state for position updates (massive performance boost)
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();

    // Storing position targets
    const mouse = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            setIsTouchDevice(true);
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;
            setIsHovering(!!isClickable);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseover', updateHoverState, { passive: true });
        window.addEventListener('mousedown', onMouseDown, { passive: true });
        window.addEventListener('mouseup', onMouseUp, { passive: true });

        document.documentElement.style.cursor = 'none';

        // Animation Loop for the cursor
        const render = () => {
            // The dot perfectly tracks the mouse
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouse.current.x - 3}px, ${mouse.current.y - 3}px, 0)`;
            }

            // The ring lags behind slightly for a smooth feeling
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.2;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.2;

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x - 12}px, ${ringPos.current.y - 12}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', updateHoverState);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.documentElement.style.cursor = 'auto';
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer Ring */}
            <div
                ref={cursorRingRef}
                className={`fixed top-0 left-0 pointer-events-none z-[9999] w-6 h-6 rounded-full border border-cyan-400 transition-all duration-300 ease-out will-change-transform ${isClicking ? 'bg-cyan-400/30 scale-75' : isHovering ? 'scale-[1.5] bg-cyan-400/10' : 'bg-transparent scale-100'
                    }`}
            />
            {/* Inner Dot */}
            <div
                ref={cursorDotRef}
                className={`fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 bg-cyan-400 rounded-full transition-opacity duration-300 will-change-transform ${isHovering ? 'opacity-0' : 'opacity-100'
                    }`}
            />
        </>
    );
};

export default CustomCursor;
