import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <form className="flex flex-col max-w-md mx-auto space-y-4">
                <input
                    type ="text"
                    placeholder="Your Name"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="p-2 border border-gray-300 rounded"
                ></textarea>
                <button 
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Message
                </button>
            </form>
        </div>
    );
}