import Hero from "./Hero";
import Stats, {StatItem} from "../../shared/components/ui/Stats";

const HOME_STATS: readonly StatItem[] = [
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
];

export default function HomeContainer() {
    return (
        <>
            <Hero />
            <Stats items={HOME_STATS}/>
            <Stats items={HOME_STATS}/>
            <Stats items={HOME_STATS}/>
            <Stats items={HOME_STATS}/>
            <Stats items={HOME_STATS}/>
            <Stats items={HOME_STATS}/>
        </>
    );
}