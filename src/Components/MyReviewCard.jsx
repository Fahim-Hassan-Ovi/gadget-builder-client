import { Star } from 'lucide-react'; // optional icon library
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Swal from 'sweetalert2';
const ReviewCard = ({ r, setMyReviews, myReviews }) => {
    const { name, email, review, rating, _id } = r || {};

    // Helper to render stars
    const renderStars = () => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={20}
                className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
            />
        ));
    };

        const handleDelete = _id => {
            
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
        
                        fetch(`https://gadget-builder-server.vercel.app/review/${_id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your Review has been deleted.",
                                        icon: "success"
                                    });
                                    const remaining = myReviews.filter(myReview => myReview._id !== _id);
                                    setMyReviews(remaining);
                                }
                            })
        
                    }
                });
            }
    return (
        <div>
            <div className="border rounded-xl p-4 shadow-md bg-white max-w-md mx-auto">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <span className="text-sm text-gray-500">{email}</span>
                </div>
                <div className='flex justify-between'>
                    <div className="flex items-center mb-2">{renderStars()}</div>
                    <div>
                        <button onClick={() => handleDelete(_id)}><IoIosCloseCircleOutline size={20}/></button>
                    </div>
                </div>
                <p className="text-gray-700">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;