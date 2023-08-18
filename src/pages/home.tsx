import { Dispatch, useState } from 'react';
import Carousel from '../components/carousel/carousel';
import { Box, Button, Typography, Modal } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const useStyles : () => {} = makeStyles( () => ({

    PlayButton: {
        backgroundColor: '#fff !important',
        transition: '.2s !important',
        borderRadius: '5vw !important',
        height: '4vw',
        width: '12vw',
        fontSize: '1.8vw !important',
        color: '#000 !important',
        '&:hover': {
            opacity: .4,
        }
    },

    MoreInfoButton: {
        backgroundColor: '#0652DD !important',
        transition: '.2s !important',
        borderRadius: '5vw !important',
        height: '4vw',
        width: '14vw',
        marginLeft: '1vw !important',
        fontSize: '1.8vw !important',
        color: '#fff !important',
        '&:hover': {
            opacity: .4,
        }
    }

}));


const Home: any = (props: { movies: any, setAppState: Dispatch<any> }) => {

    const classes : any = useStyles();
    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <Box sx={{height: '35vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                

                <Box sx={{ height: 'fit-content' }}>

                    <Typography sx={{ color: '#ededed94', fontSize: '1.5vw' }}>{props.movies.Featured.Category}</Typography>
                    <Typography sx={{ fontSize: '5vw', lineHeight: '6vw' }}>{props.movies.Featured.Title}</Typography>
                    
                    <Box sx={{ display: 'flex', width: '10.8vw', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '1.2vw' }}>{props.movies.Featured.ReleaseYear}</Typography>
                        <Typography sx={{ fontSize: '1.2vw' }}>{props.movies.Featured.MpaRating}</Typography>
                        <Typography sx={{ fontSize: '1.2vw' }}>{Math.floor(props.movies.Featured.Duration / 60) + 'H ' + props.movies.Featured.Duration % 60 + 'M '}</Typography>
                    </Box>
 
                        <Typography sx={{ fontSize: '1.5vw', marginTop: '1vw', width: '50vw' }}>{props.movies.Featured.Description}</Typography>
                        
                        <Box  sx={{ marginTop: '1vw' }} >
                            
                            <Button
                                className={classes.PlayButton}
                                onClick={() => {setPopUp(true);}}
                            >
                                <PlayArrowIcon sx={{ width: '2vw', fill: 'black', marginRight: '.2vw' }}/>
                                Play
                            </Button>

                            <Button
                                className={classes.MoreInfoButton}
                                onClick={() => {setPopUp(true);}}
                            >
                                More Info
                            </Button>
                        </Box>

                </Box>


                <img 
                    alt={props.movies.Featured.Title}
                    src={require(
                        `../assets/${props.movies.Featured.CoverImage ?
                            'tumbinals/' + props.movies.Featured.CoverImage :
                            'svgs/loading.svg'
                        }`)}
                    style={{ width: '25vw' }}
                />
            </Box>

            <Carousel movies={props.movies} setAppState={props.setAppState} />

            <Modal
                open={popUp}
                onClose={() => {setPopUp(false)}}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <iframe 
                    width="889"
                    height="500"
                    src={props.movies.Featured.VideoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                >
                </iframe>
            </Modal>

        </>
    );
}

export default Home;

