import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-2xl font-bold">About Page</h1>
                <p>This is a simple Next.js project to practice front-end development.</p>
            </main>
        </div>
    );
}