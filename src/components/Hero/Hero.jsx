const Hero = () => {
    return (
        <div className="relative mt-24">
            <div className="sm:absolute sm:z-10 ">
                <h1 className="text-5xl sm:text-7xl font-bold text-white">
                    Deploy to production,
                    <br /> scale globally, in minutes
                </h1>
                <h5 className="text-xl text-white mt-10">
                    Accelerate AI apps with high-performance infrastructure
                </h5>
                <p className="text-white text-sm pt-4">
                    Connect your GitHub account to Koyeb. Choose a repository to
                    deploy. Leave us <br /> the infrastructure - We build,
                    deploy, run, and scale your application with
                    zero-configuration
                </p>
                <div className="flex gap-4 mt-12">
                    <button className="border-solid border-2 rounded-3xl px-4 sm:px-10 py-2 text-white">
                        GET STARTED - FREE
                    </button>
                    <button className="border-solid border-2 rounded-3xl px-4 sm:px-10 py-2 text-white">
                        VIEW PRICING
                    </button>
                </div>
            </div>
            <div className="pb-28 mt-10">
                <img
                    src="/assets/home-hero.webp"
                    alt=""
                    className="sm:w-[900px] sm:h-[650px] sm:relative sm:-right-[405px] top-28"
                />
            </div>
        </div>
    );
};

export default Hero;
