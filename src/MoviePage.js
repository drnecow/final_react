import { useParams } from 'react-router-dom';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import MovieInfo from './MovieInfo';
import Image1 from './image.jpg';
import TestVideo1 from './Afraid - Domina OST - Bignic.mp4';
import TestVideo2 from './Burial - Domina OST - Bignic.mp4';


function MoviePage() {
    const { movie_id } = useParams();
    // fetch data of a movie with movie_id

    let movie = {
        'title': 'H20: Just Add Water',
        'thumbnail_link': Image1,
        'ratings': 'Some ratings',
        'country': 'Australia',
        'release_date': '7th July, 2006',
        'age_rating': 'PG-13',
        'creators': [
            {
                'id': 1,
                'name': 'Jonathan M. Shiff'
            }
        ],
        'actors': [
            {
                'id': 2,
                'name': 'Phoebe Tonkins'
            },
            {
                'id': 3,
                'name': 'Cariba Heine'
            },
            {
                'id': 4,
                'name': 'Claire Halt'
            }
        ],
        'description':
            'Three girls become mermaids after a mysterious island transforms them and gives them special powers.',
        'episodes': [
            {
                'name': 'Episode 1',
                'source': TestVideo1
              },
            {
                'name': 'Episode 2',
                'source': TestVideo2
            },
        ]
    }
    
    // "movie" object is fetched data that is processed properly

    return (
        <div className='background'>
            <div className='main-content'>
                <Header />
                <MovieInfo movie={ movie }/>
                <Footer />
            </div>
        </div>
    );
}

export default MoviePage;