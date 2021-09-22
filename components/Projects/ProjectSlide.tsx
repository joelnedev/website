import { PropsWithoutRef } from "react";
import { SliderData } from "./SliderData";

interface ProjectSlideProps extends PropsWithoutRef<any> {
	slider: SliderData
};

const ProjectSlide = ({ slider }: ProjectSlideProps) => (
	<div className="w-auto -m-">
		<h1 className="font-semibold text-purple-theme-1 text-2xl text-left"><a href={slider.href} target="_blank" rel="noreferrer noopener"> {slider.title} </a></h1>
		<p className="font-normal text-purple-theme-2 text-lg text-right"><a href={slider.href} target="_blank" rel="noreferrer noopener"> {slider.description} </a></p>
	</div>
);

export default ProjectSlide;