import Link from "next/link";

const Header = () => {
    return (
        <header className="header d-flex align-items-center">
            <div className="container">
                <div className="header_logo_container">
                    <Link href={"/"} passHref>
                        <div className="header_logo"><h1>Give it Beans!</h1></div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;