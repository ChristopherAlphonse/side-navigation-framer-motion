import Navigation from "./components/Navigation";

const randomData = [
    {
        id: "1",
        title: "Today",
        color: "cyan-600",
    },
    {
        id: "2",
        title: "Tomorrow",
        color: "indigo-600",
    },
];

const randomData2 = [
    {
        id: "1",
        title: "on-Going",
        color: "indigo-600",
    },
    {
        id: "2",
        title: "Out-Going",
        color: "yellow-600",
    },
    {
        id: "3",
        title: "Meeting",
        color: "pink-600",
    },
    {
        id: "4",
        title: "Calendar",
        color: "cyan-600",
    },
];

const App = () => {
    return (
        <main className="w-full h-screen flex flex-row relative">
            <Navigation />
            <section className="flex flex-col p-20 ml-20 w-full gap-5">
                <h1 className="text-4xl text-neutral-200">Dashboard</h1>
                <div className="flex flex-row gap-5">
                    {randomData.map((data) => (
                        <Card key={data.id} {...data} />
                    ))}
                </div>
                <div className="flex flex-row gap-5 w-full">
                    {randomData2.map((data) => (
                        <Card key={data.id} {...data} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default App;

const Card = ({ id, title, color }) => {
    return (
        <div
            className={`border-${color} h-60 w-1/2 bg-neutral-800/20 rounded border`}
        >
            <h1 className="text-xl text-slate-100 ml-5 py-2">{title}</h1>
        </div>
    );
};
