const BuildRunScale = () => {
    return (
        <div className="pb-2">
            <h1 className="text-5xl font-bold text-white text-center mb-8">
                Build. Run. Scale.
            </h1>
            <p className="text-white text-center mb-20">
                Go from local to global in minutes, not months.
            </p>
            <div className="border-solid border-2 w-  mx-72 rounded-2xl">
                <p className="text-base text-white px-6 py-6">
                    # Install Koyeb CLI <br />
                    $ curl https://www.koyeb.com/install.sh | bash <br /> <br />
                    # Deploy any Git project across regions <br />
                    $ koyeb app init fast --git github.com/koyeb/go --regions
                    fra,was <br /> <br />
                    Building... ✅ <br />
                    Deploying... Available at fast-koyeb.koyeb.app 🚀 <br />{" "}
                    <br />
                    Attach go.koyeb.io <br /> <b></b>
                    $ koyeb domains create go.koyeb.io --attach-to fast <br />{" "}
                    <br />
                    Live at https://go.koyeb.io 🌎 Enjoy!
                </p>
            </div>
            <button className="text-sm text-white w-full">View all installation options</button>
        </div>
    );
};

export default BuildRunScale;
