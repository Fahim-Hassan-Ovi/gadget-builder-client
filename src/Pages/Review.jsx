import { Star } from 'lucide-react'; // optional icon library
import { Link, useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const Review = () => {
    const reviews = useLoaderData();
    // const { name, email, review, rating } = data[0];
    // console.log(name);


    return (
        <>
            <div className='flex justify-around items-center my-4'>
                <h2 className='text-3xl font-bold'>Here are all the latest reviews</h2>
                <div className='flex'>
                    <Link to="/addReview"><button className='btn rounded-full bg-violet-300 hover:bg-white'>Add Review</button></Link>
                    <Link to="/myReview"><button className='btn rounded-full bg-violet-300 hover:bg-white'>My Review</button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mt-8'>
                {
                    reviews.map(r =>
                        <ReviewCard
                            key={r._id}
                            r={r}

                        >
                        </ReviewCard>
                    )
                }
            </div>
        </>
    );
};

export default Review;
