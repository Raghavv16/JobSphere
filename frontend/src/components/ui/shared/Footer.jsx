import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#3aafa9] text-white py-6 shadow-2xl">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold">JobSphere</h2>
                <ul className="flex justify-center space-x-6 mt-4">
                    <li><a href="#" className="hover:text-black transition">About Us</a></li>
                    <li><a href="#" className="hover:text-black transition">Contact</a></li>
                    <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
                </ul>
                <p class="mt-4 text-sm">© 2025 JobSphere. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer