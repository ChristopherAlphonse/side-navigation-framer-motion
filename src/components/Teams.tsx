import { useEffect, useState } from "react";

const TeamMembers = () => {
    const [userImages, setUserImages] = useState([]);

    useEffect(() => {
        // Fetch random user images from the API
        fetch("https://randomuser.me/api/?results=3")
            .then((response) => response.json())
            .then((data) => {
                // Extract image URLs from the fetched data
                const images = data.results.map(
                    (result) => result.picture.thumbnail,
                );
                setUserImages(images);
            })
            .catch((error) => {
                console.error("Error fetching user images:", error);
            });
    }, []);

    const teamMembers = [
        { name: "John Smith" },
        { name: "Phoebe Clark" },
        { name: "Sarah Gates" },
    ];

    return (
        <div className="flex flex-col gap-5 ">
            <h1 className="tracking-wide text-neutral-300">Team Members</h1>
            {teamMembers.map((member, index) => (
                <a
                    href="#"
                    key={index}
                    className="flex flex-row gap-3 place-items-center relative"
                >
                    <img
                        className="w-10 h-10 border-2  rounded-full  transition duration-300 ease-in-out transform hover:scale-105"
                        src={
                            userImages[index] ||
                            "/docs/images/people/profile-picture-5.jpg"
                        }
                        alt={member.name}
                        style={{ zIndex: 1 }}
                    />
                    <div
                        className={`absolute inset-0 hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700/30  border-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:border-neutral-100`}
                        style={{ zIndex: 0 }}
                    />
                    <p className="tracking-wide text-neutral-400">
                        {member.name}
                    </p>
                </a>
            ))}
        </div>
    );
};

export default TeamMembers;
