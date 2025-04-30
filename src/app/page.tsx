"use client";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import { useEffect, useState } from "react";

const components = [
	{ id: 1, Component: Section1 },
	{ id: 2, Component: Section2 },
	{ id: 3, Component: Section3 },
	{ id: 4, Component: Section4 },
	{ id: 5, Component: Section5 },
	{ id: 6, Component: Section6 },
	{ id: 7, Component: Section7 },
];

const FullPageScroll = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		const handleWheel = (e) => {
			if (isTransitioning) return;

			// If we're on Section2 (index 1), let it handle its own scrolling
			if (currentIndex === 1) {
				const section2Container = document.querySelector(".horizontal-scroll-container");
				if (section2Container) {
					// Check if we can scroll horizontally
					const canScrollLeft = section2Container.scrollLeft > 0;
					const canScrollRight =
						section2Container.scrollLeft < section2Container.scrollWidth - section2Container.clientWidth;

					// Only prevent default if we can scroll horizontally
					if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
						e.preventDefault();
						return;
					}
				}
			}

			const direction = e.deltaY > 10 ? 1 : e.deltaY < -10 ? -1 : 0;
			if (direction !== 0) scrollSection(direction);
		};

		const scrollSection = (direction) => {
			setIsTransitioning(true);
			setCurrentIndex((prev) => {
				let next = prev + direction;
				return Math.max(0, Math.min(components.length - 1, next));
			});
			setTimeout(() => setIsTransitioning(false), 1100);
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => window.removeEventListener("wheel", handleWheel);
	}, [isTransitioning, currentIndex]);

	return (
		<div className="relative h-screen w-full overflow-hidden">
			{components.map(({ id, Component }, index) => (
				<div
					key={id}
					className={`absolute top-0 left-0 h-screen w-full transition-transform duration-[1100ms] ease-in-out`}
					style={{
						transform: `translateY(${(index - currentIndex) * 100}vh)`,
					}}
				>
					<Component isActive={index === currentIndex} />
				</div>
			))}
		</div>
	);
};

export default FullPageScroll;
