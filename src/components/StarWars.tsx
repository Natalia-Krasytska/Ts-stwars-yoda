import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import useHero   from "../utils/useHero.ts";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const heroId = useHero(defaultHero);

    if (!characters[heroId]) {
        return <ErrorPage />;
    }

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};
export default StarWars;