import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia('(hover: none)').matches) return;

        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (circleRef.current) circleRef.current.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            if (circleRef.current) circleRef.current.style.opacity = '0';
        };

        const handleMouseEnter = () => {
            if (circleRef.current) circleRef.current.style.opacity = '1';
        };

        const animate = () => {
            // Smooth lerp — circle trails behind the cursor
            circleX += (mouseX - circleX) * 0.15;
            circleY += (mouseY - circleY) * 0.15;

            if (circleRef.current) {
                // Offset 8px right and 10px down from cursor tip
                circleRef.current.style.transform = `translate3d(${circleX + 8}px, ${circleY + 10}px, 0)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // Don't render on touch/mobile
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
        return null;
    }

    return (
        <div
            ref={circleRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 180, 255, 0.8)',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: 0,
                willChange: 'transform',
                transition: 'opacity 0.3s ease',
            }}
        />
    );
};

export default CustomCursor;
