import { useEffect } from "react";
import { useState } from "react";

const Portfolios = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    useEffect(() => {
        fetch("./portfolio.json")
            .then((res) => res.json())
            .then((data) => setPortfolioData(data));
    }, []);

    return (
        <div className="pb-10">
            <h1 className="text-white text-5xl font-bold text-center my-12">
                Portfolios
            </h1>
            <div className="grid sm:grid-cols-3 gap-10 grid-flow-row-dense">
                {portfolioData.map((item, id) => (
                    <div
                        key={id}
                        className="p-6 border border-gray-200 rounded-lg ">
                        <img
                            src={item.image_url}
                            alt=""
                            className="w-7 h-7 text-gray-50 dark:text-gray-400 mb-3 rounded-full"
                        />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                                {item.name}
                            </h5>
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">
                                {item.expertize}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-white">
                            {item.description}
                        </p>
                        <img src={item.gig_image_url} alt="" className="w-full h-48 rounded-md"/>
                        <div className="text-center">
                        <a href={item.url} className="btn hover:bg-gray-950 bg-black w-full mt-4  text-white text-xl font-semibold px-auto" target="_blank">Live Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolios;
