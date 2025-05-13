import BannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
      
            <div className="h-[870px]">
                <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2] h-[630px] rounded-b-2xl relative">
                <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with<br />Gadget Builder Accessories</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn btn-primary rounded-full bg-white mb-6 text-[#9538E2]">Shop Now</button>
                <img className="rounded-2xl md:max-w-[1062px] md:max-h-[563px] md:absolute inset-0 m-auto top-[620px]"  src={BannerImg} alt="Banner Image" />
            </div>
            </div>
        
    );
};

export default Banner;