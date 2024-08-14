const Navbar = () => {
    return (
        <div className="navbar pt-8">
            <div className="navbar-start">
                <h1 className="text-xl font-bold text-white">Koyeb</h1>
            </div>
            <div className="navbar-center">
                <ul className="flex gap-8">
                    <li className="text-white">Pricing</li>
                    <li className="text-white">Docs</li>
                    <li className="text-white">Blog</li>
                    <li className="text-white">Tutorials</li>
                    <li className="text-white">Changelog</li>
                    <li className="text-white">Deploy</li>
                    <li className="text-white">AI</li>
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <button className="border-solid border-2 rounded-3xl px-6 py-1 text-white">
                    LOGIN
                </button>
                <button className="border-solid border-2 rounded-3xl px-6 py-1 text-white">
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default Navbar;
