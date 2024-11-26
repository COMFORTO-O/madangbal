import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <p>&copy; 2024 마당발. All rights reserved.</p>
                <div className="space-x-4">
                    <a href="/privacy" className="text-gray-400">
                        개인정보 취급방침
                    </a>
                    <a href="/terms" className="text-gray-400">
                        이용약관
                    </a>
                    <a href="" className="text-gray-400">
                        insta
                    </a>
                    <a href="" className="text-gray-400">
                        facebook
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
