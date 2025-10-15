"use client";
import { useState } from "react";

export default function TasksPage() {
    const [tasks, setTasks] = useState<{ title: string; description: string }[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        const newTask = { title, description };
        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Add a New Task</h1>

            <form onSubmit={handleAddTask} className="mb-6">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full mb-3"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Add Task
                </button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="border-b border-gray-200 py-2">
                        <strong>{task.title}</strong>
                        <p className="text-gray-600">{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}