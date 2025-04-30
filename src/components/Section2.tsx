import { useEffect, useRef } from "react";

const Section2 = ({ isActive }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (isActive && containerRef.current) {
			requestAnimationFrame(() => {
				containerRef.current.scrollLeft = 0;
			});
		}
	}, [isActive]);

	const handleWheel = (e) => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += e.deltaY;
			e.preventDefault();
		}
	};

	return (
		<div className="h-full w-full bg-blue-700 text-white">
			<div
				ref={containerRef}
				className="horizontal-scroll-container h-full overflow-x-scroll overflow-y-hidden scrollbar-hide"
				onWheel={handleWheel}
			>
				<div className="flex w-max h-full gap-10 px-10 items-center">
					{Array.from({ length: 20 }).map((_, idx) => (
						<div key={idx}>
							<div className="min-w-[300px] h-[300px] bg-white text-black rounded-lg flex justify-center items-center text-2xl font-bold shadow-lg">
								Box {idx + 1}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Section2;
