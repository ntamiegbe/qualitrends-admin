import * as echarts from "echarts/core";
import {
	TitleComponent,
	TitleComponentOption,
	PolarComponent,
	PolarComponentOption,
	TooltipComponent,
	TooltipComponentOption,
} from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { useEffect, useState } from "react";

type EChartsOption = echarts.ComposeOption<
	| TitleComponentOption
	| PolarComponentOption
	| TooltipComponentOption
	| BarSeriesOption
>;

const RecentProjectsProgressChart = () => {
	const [option] = useState<EChartsOption>({
		polar: {
			radius: [55, "85%"],
		},
		angleAxis: {
			max: 100,
			startAngle: -90,
			splitLine: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			axisTick: {
				show: false,
			},
		},
		radiusAxis: {
			type: "category",
			data: [
				"Project 1",
				"Project 2",
				"Project 3",
				"Project 4",
				"Project 5",
				"Project 6",
			],
		},
		tooltip: {},
		series: {
			type: "bar",
			data: [
				{
					value: 40,
					itemStyle: {
						color: "#008000",
					},
				},
				{
					value: 35,
					itemStyle: {
						color: "#17A2B8",
					},
				},
				{
					value: 45,
					itemStyle: {
						color: "#FFE2D2",
					},
				},
				{
					value: 86,
					itemStyle: {
						color: "#FF0000",
					},
				},
				{
					value: 46,
					itemStyle: {
						color: "#D35B17",
					},
				},
				{
					value: 76,
					itemStyle: {
						color: "#FF6900",
					},
				},
			],
			coordinateSystem: "polar",
			colorBy: "data",
		},
	});

	useEffect(() => {
		echarts.use([
			TitleComponent,
			PolarComponent,
			TooltipComponent,
			BarChart,
			SVGRenderer,
		]);

		var chartDom = document.getElementById("main")!;
		var myChart = echarts.init(chartDom, null, {
			renderer: "svg",
		});

		option && myChart.setOption(option);

		return () => {
			myChart.dispose();
		};
	}, []);

	return (
		<div className='bg-white drop-shadow-md rounded-lg h-[320px] lg:h-[412px] px-5 py-4'>
			<h2 className='lg:text-xl font-bold'>Recent Projects Progress</h2>

			<div className='h-[250px] lg:h-[330px] mt-2 lg:mt-5 flex'>
				<div id='main' className='h-full w-[330px]'></div>
			</div>
		</div>
	);
};

export default RecentProjectsProgressChart;
