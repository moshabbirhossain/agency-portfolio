const Portfolios = () => {
    return (
        <div className="pb-10">
            <h1 className="text-white text-5xl font-bold text-center my-12">
                Portfolios
            </h1>
            <div className="grid grid-cols-3 gap-10 grid-flow-row-dense">
                <div className="p-6 border border-gray-200 rounded-lg ">
                <img src="./../../../public/assets/github.svg" alt="" className="w-7 h-7 text-gray-50 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        Deploy from GitHub
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                    Simply git push, we build and deploy your app with blazing fast built-in continuous deployment. Develop fearlessly with native versioning of all deployments.
                    </p>
                    <img src="./../../../public/assets/g2.webp" alt=""/>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg ">
                    <img src="./../../../public/assets/docker.svg" alt="" className="w-7 h-7 text-gray-50 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        Deploy Docker containers
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                    Build Docker containers, host them on any registry, and atomically deploy your new version worldwide in a single API call.
                    </p>
                    <img src="./../../../public/assets/d2.webp" alt="" />
                </div>
                <div className="p-6 border border-gray-200 rounded-lg ">
                <img src="./../../../public/assets/team.svg" alt="" className="w-7 h-7 text-gray-50 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        Develop with your team
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                    Invite your team to build together and enjoy live preview after each push with built-in CI/CD.
                    </p>
                    <img src="./../../../public/assets/t2.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolios;
