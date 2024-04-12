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
import { polarBar } from "@/data/chart";

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
		colorBy: "data",
		color: ["#008000", "#17A2B8", "#FFE2D2", "#FF0000", "#D35B17", "#FF6900"],
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
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: true,
				formatter: (value, index) => {
					return value + "%";
				},
			},
			axisTick: {
				show: false,
			},
			data: polarBar.map((item) => item.value),
		},
		tooltip: {
			formatter: "{b}: {c}%",
		},
		series: {
			type: "bar",
			data: polarBar,
			coordinateSystem: "polar",
			label: {
				show: false,
			},
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
