import { useRouter } from "next/router";
import React from "react";

export interface BreadCrumb {
	title: string;
	url: string;
}

export interface BreadCrumbsProps {
	data: BreadCrumb[];
}

const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
	const router = useRouter();

	const formatBreadCrumbs = () => {
		return data.map((breadCrumb, index) => {
			return (
				<span key={index}>
					<a href={`${router.basePath}${breadCrumb.url.toLowerCase()}`}>
						{breadCrumb.title}
					</a>
					{index != data.length - 1 ? (
						<span className="px-2">/</span>
					) : (
						<span></span>
					)}
				</span>
			);
		});
	};

	return <>{formatBreadCrumbs()}</>;
};

export default BreadCrumbs;
