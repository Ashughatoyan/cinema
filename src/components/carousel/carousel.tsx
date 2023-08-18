import { Dispatch, useState } from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@mui/material';



const useStyles = makeStyles( () => ({

    MovieCard: {
        width: '90%',
        transition: '.2s',
        '&:hover': {
            width: '100%',
        }
    },

    MovieCardSelected: {
        width: '100%'
    }

}));

const Carousel: any = (props: { movies: any, setAppState: Dispatch<any> }) => {

    const classes = useStyles();
    const [crouselState, setCarouselState] = useState(null);

    const featuredRefresh : any = (film:any) => {
        return(prevState:any) => {
            
            // @ts-ignore
            const localCinemaFilter : any = JSON.parse(localStorage.getItem("movies"));

            if(!localCinemaFilter) {
                localStorage.setItem("movies", JSON.stringify([ film.Id ]));
            } else {
                localStorage.setItem("movies", JSON.stringify([ 
                    film.Id, 
                    ...localCinemaFilter
                    .filter( (localFilm : any) => localFilm !== film.Id )
                ]));
            };


            if (prevState.movies.Featured.Id !== film.Id) {
                return { 
                    ...prevState, 
                    movies: {
                        Featured: film,
                        TendingNow: prevState.movies.TendingNow.map((prevfilm:any) => prevfilm.Id === film.Id ? prevState.movies.Featured : prevfilm)
                    }
                }
            } return prevState;
        }
    }

    return (
        <>
            <Typography sx={{ textTransform: 'capitalize', fontSize: '1.8vw' }}>tranding now </Typography>
            <ScrollingCarousel>
                {
                    props.movies?.TendingNow.map( (film : any ) => (
                        <div 
                            key={film.Title}
                            style={{
                                width: '11.2vw',
                                height: '20vw',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <p style={{
                                opacity: crouselState === film.Id || props.movies.Featured.Id === film.Id ? 1 : 0,
                                fontSize: '1.2vw',
                                marginBottom: '0.5vw',
                                transition: '.2s',
                                marginTop: 0,
                            }}
                            >{film.Title}</p>
                            <img
                                alt={film.Title}
                                className={`${classes.MovieCard} ${(crouselState === film.Id || props.movies.Featured.Id === film.Id) && classes.MovieCardSelected}`}
                                src={require(`../../assets/tumbinals/${film.CoverImage}`)}
                                onMouseEnter={() => {setCarouselState(film.Id)}}
                                onMouseLeave={() => {setCarouselState(null)}}
                                onClick={() => {
                                    props.setAppState(featuredRefresh(film));
                                }}
                            />
                        </div>
                    ))
                }
            </ScrollingCarousel>
        </>
    )
}

export default Carousel;