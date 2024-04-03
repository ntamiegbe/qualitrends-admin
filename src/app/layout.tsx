import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
	variable: "--roboto",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--open-sans" });

export const metadata: Metadata = {
	title: "Qualitrends",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(roboto.className, openSans.className)}>
				{children}
			</body>
		</html>
	);
}
