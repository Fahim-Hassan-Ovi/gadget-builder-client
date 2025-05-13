import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 4) {
            setError({ ...error, name: "must be more than 4 character" });
            return;
        }
        const email = form.get("email");
        
        const password = form.get("password");
        if (password.length < 5) {
            setError({ ...error, password: "Password must be more than 5 character" });
            return;
        }
        console.log({ name,  email, password });
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(user);
                updateUserProfile({displayName: name})
                .then(() =>{
                    navigate("/");
                })
                .catch(err=>{
                    
                    console.log(err.message);
                })
            })
            .catch(error => {
                console.log('Error', error.message)
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    {
                        error.name && (
                            <label className="label text-red-500 text-xs">
                                {error.name}
                            </label>
                        )
                    }
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        {
                            error.password && (
                                <label className="label text-red-500 text-xs">
                                    {error.password}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full bg-[#403F3F] border-none shadow-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-500" to="/auth/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;