import { useEffect, useContext, useMemo } from 'react';
import {useParams} from "react-router";
import {characters} from "../utils/constants.ts";
import { SWContext } from '../utils/context.ts';


const useHero = (defaultHero: string): string => {
    const params = useParams<{ heroId?: string }>();
    const { changeHero } = useContext(SWContext);

    const validHeroId = useMemo(() => {
        const id = params.heroId;
        return id && characters[id] ? id : defaultHero;
    }, [params.heroId, defaultHero]);

    useEffect(() => {
        changeHero(validHeroId);
    }, [validHeroId, changeHero]);

    return validHeroId;
};

export default useHero;
