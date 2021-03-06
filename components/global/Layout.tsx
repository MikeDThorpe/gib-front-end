import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<main className="container">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
