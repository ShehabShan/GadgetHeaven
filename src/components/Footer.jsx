const Footer = () => {
  return (
    <footer className="bg-white   mx-auto border ">
      <div className="flex flex-col justify-center items-center gap-[74px]">
        <div className="text-center mt-24">
          <h2 className="text-[32px]">Gadget Heaven</h2>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex gap-[164px]">
          <div>
            <p className="text-xl font-bold text-black mb-3">Services</p>
            <ul>
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold text-black mb-3">Company </p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold text-black mb-3">Legal</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
