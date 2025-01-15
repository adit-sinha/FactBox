import { ScienceFacts } from './FactsData/ScienceFacts'; 
import { SportsFacts } from './FactsData/SportsFacts';
import { VideoGamesFacts } from './FactsData/VideoGamesFacts'; 
import { MusicFacts } from './FactsData/MusicFacts'; 
import { MythologyFacts } from './FactsData/MythologyFacts'; 
import { FilmFacts } from './FactsData/FilmFacts'; 


export const P_MODALS = [
    {
        id: 'p1',
        img: 'science.jpg',
        text: 'This is 1',
        title: 'Science'
    },
    {
        id: 'p2',
        img: 'sports.jpg',
        text: 'This is 2',
        title: 'Sports'
    },
    {
        id: 'p3',
        img: 'video-games.jpg',
        //the first three pictures belong to https://www.freepik.com/
        text: 'This is 3',
        title: 'Video Games'
    },
    {
        id: 'p4',
        img: 'music.jpg',
        text: 'This is 4',
        title: 'Music'
    },
    {
        id: 'p5',
        img: 'mythology.jpg',
        text: 'This is 5',
        title: 'Mythology'
    },
    {
        id: 'p6',
        img: 'film.jpg',
        //pictures 4 to 6 (inclusive) belong to https://www.vecteezy.com/ 
        text: 'This is 6',
        title: 'Film'
    }
]

//Implementing random fact generation:
const factsMap: { [key: string]: string[] } = {
    'p1': ScienceFacts,  
    'p2': SportsFacts,   
    'p3': VideoGamesFacts,
    'p4': MusicFacts,
    'p5': MythologyFacts,
    'p6': FilmFacts
};


function getRandomFactsById(id: string, count: number): string[] {
    const facts = factsMap[id];
    if (!facts) { return []; }

    //Random generation:
    const shuffled = facts.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count); 
}

//Formatting chosen facts
function format_Facts(facts: string[]): string {
    return facts.map((fact, index) => `${index + 1}. ${fact}`).join('\n'); // Join with newlines and numbers
}

P_MODALS.forEach(m => { //m i.e modal
    const randomFacts = getRandomFactsById(m.id, 10); 
    m.text = format_Facts(randomFacts);
});

console.log(P_MODALS);