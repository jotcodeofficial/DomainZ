import Panel1 from "./panel-1/page";
import Panel2 from "./panel-2/page";

export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Panel1 />
                <Panel2 />
            </div>
        </main>
    );
}
