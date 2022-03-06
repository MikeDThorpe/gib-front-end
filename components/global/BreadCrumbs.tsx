import { useRouter } from "next/router";
import React from "react";


export interface BreadCrumb {
    title: string,
    url: string
}

export interface BreadCrumbsProps {
    data: BreadCrumb[]
}


const BreadCrumbs = ({data}: BreadCrumbsProps) => {
    const router = useRouter();

    const formatBreadCrumbs = () => {

        return data.map((breadCrumb, index) => {
            return (
                <>
                <a href={`${router.basePath}${breadCrumb.url.toLowerCase()}`} key={index}>{breadCrumb.title}</a>
                {index !=  data.length - 1 ? <span className="px-2">/</span> : <span></span>}
                </>
            )
        })

    }


    return (
        <>
        {formatBreadCrumbs()}
        </>
    )

}

export default BreadCrumbs;