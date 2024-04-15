"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const ProjectDetails = () => {
	const router = useRouter();

	const params = useParams();

	useEffect(() => {
		router.push(`/projects/${params.id}/inventory`);
	}, []);

	return <div></div>;
};

export default ProjectDetails;
