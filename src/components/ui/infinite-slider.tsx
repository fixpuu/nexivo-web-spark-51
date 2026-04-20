import { useEffect, useState, useRef, type ReactNode } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

interface InfiniteSliderProps {
    children: ReactNode;
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
}

const InfiniteSlider = ({
    children,
    speed = 30,
    direction = 'left',
    className = '',
}: InfiniteSliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const xRef = useRef(0);

    useEffect(() => {
        if (innerRef.current) {
            // Measure width of original children (first half)
            const children = innerRef.current.children;
            let totalWidth = 0;
            const half = Math.floor(children.length / 2);
            for (let i = 0; i < half; i++) {
                totalWidth += (children[i] as HTMLElement).offsetWidth;
                const style = window.getComputedStyle(children[i] as HTMLElement);
                totalWidth += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }
            setContentWidth(totalWidth);
        }
    }, [children]);

    useAnimationFrame((_t, delta) => {
        if (!innerRef.current || contentWidth === 0) return;

        const pxPerFrame = (speed * delta) / 1000;
        if (direction === 'left') {
            xRef.current -= pxPerFrame;
            if (xRef.current <= -contentWidth) {
                xRef.current += contentWidth;
            }
        } else {
            xRef.current += pxPerFrame;
            if (xRef.current >= 0) {
                xRef.current -= contentWidth;
            }
        }

        innerRef.current.style.transform = `translateX(${xRef.current}px)`;
    });

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={innerRef} className="flex items-center whitespace-nowrap will-change-transform">
                {children}
                {/* Duplicate for seamless loop */}
                {children}
            </div>
        </div>
    );
};

export default InfiniteSlider;
