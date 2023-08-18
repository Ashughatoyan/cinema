import { FC } from 'react';

import { ReactComponent as HomeIcon } from './assets/svgs/SidebarHome.svg';
import { ReactComponent as SearchIcon } from './assets/svgs/SidebarSearch.svg';
import { ReactComponent as WatchLaterIcon } from './assets/svgs/SidebarWatch Later.svg';
import { ReactComponent as ShowsIcon } from './assets/svgs/SidebarShows.svg';
import { ReactComponent as MoviesIcon } from './assets/svgs/SidebaridebarMovies.svg';
import { ReactComponent as GenreIcon } from './assets/svgs/SidebarGenre.svg';


type NAV_LIST_TYPE = Array<{ label: String, icon: FC, URL : String }>

const NAV_LIST : NAV_LIST_TYPE = [ 
    { label: 'Search', icon: SearchIcon, URL : 'search' },
    { label: 'Home', icon: HomeIcon, URL : '/' },
    { label: 'TV Shows', icon: ShowsIcon, URL : 'tvshow' },
    { label: 'Movies', icon: MoviesIcon, URL : 'movies' },
    { label: 'Genres', icon: GenreIcon, URL : 'genres' },
    { label: 'Watch Later', icon: WatchLaterIcon, URL : 'watchlater' }
];


export { NAV_LIST };