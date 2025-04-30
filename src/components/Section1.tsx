"use client";
import { useEffect, useState } from "react";

const Section1 = ({ isActive }) => {
	const [shrink, setShrink] = useState(false);

	useEffect(() => {
		if (isActive) {
			setShrink(false);
			const timer = setTimeout(() => {
				setShrink(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [isActive]);

	return (
		<div className="h-screen w-full flex justify-center items-center bg-red-900 text-white relative overflow-hidden">
			<div
				className={`relative flex justify-center items-center rounded-lg bg-white transition-all duration-1000`}
				style={{
					width: shrink ? "250px" : "500px",
					height: shrink ? "125px" : "500px",
				}}
			></div>

			<p
				className={`absolute top-20 text-black font-semibold text-lg transition-all duration-700 ${
					shrink ? "opacity-100 translate-y-4" : "opacity-0 -translate-y-8"
				}`}
			>
				Welcome to the Experience!
			</p>
		</div>
	);
};

export default Section1;
