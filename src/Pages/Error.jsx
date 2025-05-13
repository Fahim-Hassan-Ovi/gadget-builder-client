import { Helmet } from "react-helmet";
import ErrorImg from ".././assets/error.jpg"
const Error = () => {
    return (
        <><Helmet>
        <meta charSet="utf-8" />
        <title>Error | Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
        <div className="py-16 px-16 flex flex-col justify-center items-center">
            
            <img src={ErrorImg} alt="" />
            <p className="text-2xl font-bold">Oops! The page you&apos;re looking for doesn&apos;t exist. </p>
        </div>
        </>
    );
};

export default Error;