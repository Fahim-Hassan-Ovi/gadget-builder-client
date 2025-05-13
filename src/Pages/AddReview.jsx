import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.displayName);
    // console.log(user);

    const handleAddReview = event => {

        event.preventDefault();
        const email = user?.email;
        const name = user?.displayName;

        const form = event.target;
        const review = form.review.value;
        const rating = form.rating.value;
        
        const newReview = {name,email,review, rating};
        console.log(newReview);


        // send data to the server
        fetch('https://gadget-builder-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added a Review successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-[#374151]'>Add a review</h1>
                <form onSubmit={handleAddReview} className='flex justify-center mt-5'>
                    <fieldset className="fieldset bg-violet-300 border-base-300 rounded-box border p-4">
                       
                        {/* form row Review and Rating*/}
                        <div className='md:flex mb-6'>

                            <div className='md:w-1/2'>
                                <label className="label">Review</label>
                                <input type="text" name='review' className="input" placeholder="Review" />
                            </div>

                            <div className='md:w-1/2 ml-4'>
                                <label className="label">Rating</label>
                                <input type="number" name='rating' className="input" placeholder="Rating" />
                            </div>

                        </div>

                        <input type="submit" value="Add Review" className='btn btn-neutral bg-violet-800 border-none shadow-none mt-4 text-white' />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddReview;