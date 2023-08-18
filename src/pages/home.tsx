import { FC } from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

import data from "../data.json";



const Home: FC = () => {
    
    return (
        <ScrollingCarousel>
            {
                data.TendingNow.map( (film : any ) => (
                    <img src={require(`../assets/tumbinals/${film.CoverImage}`)} />
                ))
            }
        </ScrollingCarousel>
    )
}

export default Home;