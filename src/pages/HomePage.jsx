import { SideBar } from "../cmps/SideBar";

export function HomePage() {
    return (
        <section className="instagram-home-page">
            <header className="home-header">header</header>
            <aside className="home-left-side-bar">
                <SideBar/>
            </aside>
            <main className="home-feed">feed</main>
            <aside className="home-right-suggestion">suggestion</aside>
        </section >
    )
}

