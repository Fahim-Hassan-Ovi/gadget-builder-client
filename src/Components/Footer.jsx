
const Footer = () => {
    return (
        <div className="">
            <footer className="footer footer-center bg-base-200 text-base-content p-10 border-b-1 border-gray-400/10">
                <aside>
                    <h1 className="font-bold text-3xl">
                        Gadget Builder
                    </h1>
                    <p className="font-medium text-base">Leading the way in cutting-edge technology and innovation.</p>
                </aside>
            </footer>
            <footer className="footer bg-base-200 text-base-content p-10 grid md:grid-cols-2 lg:grid-cols-3">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;