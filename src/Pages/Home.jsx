
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet";
import Categories from "../Components/Categories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Builder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* Banner */}
            <Banner />
            {/* Categories Tab section */}
            <Categories categories={categories} />
        </div>
    );
};

export default Home;