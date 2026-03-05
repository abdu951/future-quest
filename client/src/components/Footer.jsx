import { assets, footerLinks } from "../assets/assets";
import logo from "../assets/logo-4.png"

const Footer = () => {

    return (
        <footer className=" px-6 md:px-16 lg:px-24 xl:px-32 text-gray-500">
            <p className="py-4 text-center text-xs md:text-sm border-t mt-6 border-slate-500/30">
                Copyright 2026 © <a href="https://prebuiltui.com">Bitz technologies</a>. All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;