import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import MyReviewCard from "../Components/MyReviewCard";

const MyReview = () => {

    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        const filterByEmail = [...data].filter(myReview => myReview.email === email);
        setMyReviews(filterByEmail);
    }, [data, email]);



    return (
        <>
        <div className='flex justify-around items-center my-4'>
            <h2 className='text-3xl font-bold'>Here are your reviews</h2>
        <Link to="/addReview"><button className='btn rounded-full bg-violet-300'>Add Review</button></Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mt-8'>
            {
                myReviews.map(r =>
                    <MyReviewCard
                        key={r._id}
                        r={r}
                        myReviews={myReviews}
                        setMyReviews={setMyReviews}
                    >
                    </MyReviewCard>
                )
            }
        </div>
        </>
    );
};

export default MyReview;