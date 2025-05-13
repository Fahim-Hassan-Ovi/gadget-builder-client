import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2]   ">
                <h1 className="text-5xl font-bold text-white">Statistics</h1>
                <p className="py-6 text-white">
                    TDiscover key insights and trends about our products, sales, and customer
                    feedback to help you make informed decisions. Our statistics highlight the
                    growth and success of the gadgets you love.
                </p>

            </div>
            <div className="text-center my-12">
                <h1 className="text-2xl md:text-5xl font-bold ">There is no statistics review right now</h1>
            </div>
        </div>
    );
};

export default Statistics;