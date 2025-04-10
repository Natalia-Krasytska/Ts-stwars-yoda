import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import useHero from "../useHero.ts";

const home = () => {
    const heroId = useHero(defaultHero);

    if (!characters[heroId]) {
        return <ErrorPage />;
    }

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    );
};

