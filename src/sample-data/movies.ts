import images from './images'

// 1. Define the shape of nested objects
interface Genre {
  id: number
  name: string
}

interface ProductionCountry {
  iso_3166_1: string
  name: string
}

interface Collection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
  media_type?: string // Optional because it appeared in some entries but not others
}

// 2. Define the main Movie interface
export interface MovieData {
  id: number
  title: string
  media_type: string
  poster_path: string
  backdrop_path: string
  overview: string
  belongs_to_collection: Collection | null
  genres: Genre[]
  vote_average: number
  status: string
  release_date: string
  vote_count: number
  production_countries: ProductionCountry[]
  runtime: number
  tagline: string
}

// Helper function to get image by ID (subtract 1 because array is 0-indexed)
const getImageByIndex = (id: number) => {
  const index = id; // Subtract 1 to convert from 1-based ID to 0-based array index
  // Ensure index is within bounds
  if (index >= 1 && index < images.length) {
    return images[index];
  }
  // Fallback to first image if index is out of bounds
  return images[10];
}

// 3. The Data Array
const movies: MovieData[] = [
  {
    id: 1,
    title: 'Inception',
    media_type: 'movie',
    poster_path: getImageByIndex(1).poster,
    backdrop_path: getImageByIndex(1).backdrop,
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    belongs_to_collection: {
      id: 1234,
      name: 'Inception Collection',
      poster_path: getImageByIndex(1).poster,
      backdrop_path: getImageByIndex(1).backdrop,
      media_type: 'collection',
    },
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 53, name: 'Thriller' },
    ],
    vote_average: 8.3,
    status: 'Released',
    release_date: '2010-07-16',
    vote_count: 35000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'GB', name: 'United Kingdom' },
    ],
    runtime: 148,
    tagline: 'Your mind is the scene of the crime.',
  },
  {
    id: 2,
    title: 'The Godfather',
    media_type: 'movie',
    poster_path: getImageByIndex(2).poster,
    backdrop_path: getImageByIndex(2).backdrop,
    overview:
      'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    belongs_to_collection: {
      id: 5678,
      name: 'The Godfather Collection',
      poster_path: getImageByIndex(2).poster,
      backdrop_path: getImageByIndex(2).backdrop,
    },
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
    vote_average: 8.7,
    status: 'Released',
    release_date: '1972-03-24',
    vote_count: 42000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 175,
    tagline: "An offer you can't refuse.",
  },
  {
    id: 3,
    title: 'The Dark Knight',
    media_type: 'movie',
    poster_path: getImageByIndex(3).poster,
    backdrop_path: getImageByIndex(3).backdrop,
    overview:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    belongs_to_collection: {
      id: 263,
      name: 'The Dark Knight Trilogy',
      poster_path: getImageByIndex(3).poster,
      backdrop_path: getImageByIndex(3).backdrop,
    },
    genres: [
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '2008-07-18',
    vote_count: 30000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'GB', name: 'United Kingdom' },
    ],
    runtime: 152,
    tagline: 'Why So Serious?',
  },
  {
    id: 4,
    title: 'Parasite',
    media_type: 'movie',
    poster_path: getImageByIndex(4).poster,
    backdrop_path: getImageByIndex(4).backdrop,
    overview:
      'A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.',
    belongs_to_collection: null,
    genres: [
      { id: 53, name: 'Thriller' },
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
    ],
    vote_average: 8.6,
    status: 'Released',
    release_date: '2019-05-30',
    vote_count: 18000,
    production_countries: [{ iso_3166_1: 'KR', name: 'South Korea' }],
    runtime: 132,
    tagline: 'Act like you own the place.',
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    media_type: 'movie',
    poster_path: getImageByIndex(5).poster,
    backdrop_path: getImageByIndex(5).backdrop,
    overview:
      'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    belongs_to_collection: null,
    genres: [
      { id: 80, name: 'Crime' },
      { id: 53, name: 'Thriller' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '1994-09-10',
    vote_count: 25000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 154,
    tagline:
      "Just because you are a character doesn't mean you have character.",
  },
  {
    id: 6,
    title: 'Spirited Away',
    media_type: 'movie',
    poster_path: getImageByIndex(6).poster,
    backdrop_path: getImageByIndex(6).backdrop,
    overview:
      'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    belongs_to_collection: null,
    genres: [
      { id: 16, name: 'Animation' },
      { id: 14, name: 'Fantasy' },
      { id: 12, name: 'Adventure' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '2001-07-20',
    vote_count: 15000,
    production_countries: [{ iso_3166_1: 'JP', name: 'Japan' }],
    runtime: 125,
    tagline: 'The tunnel led Chihiro to a mysterious town...',
  },
  {
    id: 7,
    title: 'The Shawshank Redemption',
    media_type: 'movie',
    poster_path: getImageByIndex(7).poster,
    backdrop_path: getImageByIndex(7).backdrop,
    overview:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    belongs_to_collection: null,
    genres: [{ id: 18, name: 'Drama' }],
    vote_average: 8.7,
    status: 'Released',
    release_date: '1994-09-23',
    vote_count: 24000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 142,
    tagline: 'Fear can hold you prisoner. Hope can set you free.',
  },
  {
    id: 8,
    title: 'Avengers: Endgame',
    media_type: 'movie',
    poster_path: getImageByIndex(8).poster,
    backdrop_path: getImageByIndex(8).backdrop,
    overview:
      "After the devastating events of Avengers: Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    belongs_to_collection: {
      id: 86311,
      name: 'The Avengers Collection',
      poster_path: getImageByIndex(8).poster,
      backdrop_path: getImageByIndex(8).backdrop,
    },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
    ],
    vote_average: 8.3,
    status: 'Released',
    release_date: '2019-04-26',
    vote_count: 23000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 181,
    tagline: 'Part of the journey is the end.',
  },
  {
    id: 9,
    title: 'Interstellar',
    media_type: 'movie',
    poster_path: getImageByIndex(9).poster,
    backdrop_path: getImageByIndex(9).backdrop,
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    belongs_to_collection: null,
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Science Fiction' },
    ],
    vote_average: 8.6,
    status: 'Released',
    release_date: '2014-11-07',
    vote_count: 32000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'GB', name: 'United Kingdom' },
    ],
    runtime: 169,
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
  },
  {
    id: 10,
    title: 'The Matrix',
    media_type: 'movie',
    poster_path: getImageByIndex(10).poster,
    backdrop_path: getImageByIndex(10).backdrop,
    overview:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    belongs_to_collection: {
      id: 234,
      name: 'The Matrix Collection',
      poster_path: getImageByIndex(10).poster,
      backdrop_path: getImageByIndex(10).backdrop,
    },
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
    ],
    vote_average: 8.2,
    status: 'Released',
    release_date: '1999-03-31',
    vote_count: 24000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'AU', name: 'Australia' },
    ],
    runtime: 136,
    tagline: 'Welcome to the Real World.',
  },
  {
    id: 11,
    title: 'La La Land',
    media_type: 'movie',
    poster_path: getImageByIndex(11).poster,
    backdrop_path: getImageByIndex(11).backdrop,
    overview:
      'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    belongs_to_collection: null,
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
      { id: 10402, name: 'Music' },
    ],
    vote_average: 8.0,
    status: 'Released',
    release_date: '2016-12-09',
    vote_count: 15000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 128,
    tagline: "Here's to the fools who dream.",
  },
  {
    id: 12,
    title: 'Gladiator',
    media_type: 'movie',
    poster_path: getImageByIndex(12).poster,
    backdrop_path: getImageByIndex(12).backdrop,
    overview:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    belongs_to_collection: null,
    genres: [
      { id: 28, name: 'Action' },
      { id: 18, name: 'Drama' },
      { id: 12, name: 'Adventure' },
    ],
    vote_average: 8.2,
    status: 'Released',
    release_date: '2000-05-05',
    vote_count: 17000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'GB', name: 'United Kingdom' },
    ],
    runtime: 155,
    tagline: 'A hero will rise.',
  },
  {
    id: 13,
    title: 'The Lord of the Rings: The Return of the King',
    media_type: 'movie',
    poster_path: getImageByIndex(13).poster,
    backdrop_path: getImageByIndex(13).backdrop,
    overview:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    belongs_to_collection: {
      id: 119,
      name: 'The Lord of the Rings Collection',
      poster_path: getImageByIndex(13).poster,
      backdrop_path: getImageByIndex(13).backdrop,
    },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 14, name: 'Fantasy' },
      { id: 28, name: 'Action' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '2003-12-17',
    vote_count: 22000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'NZ', name: 'New Zealand' },
    ],
    runtime: 201,
    tagline: 'The eye of the enemy is moving.',
  },
  {
    id: 14,
    title: 'Fight Club',
    media_type: 'movie',
    poster_path: getImageByIndex(14).poster,
    backdrop_path: getImageByIndex(14).backdrop,
    overview:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    belongs_to_collection: null,
    genres: [{ id: 18, name: 'Drama' }],
    vote_average: 8.4,
    status: 'Released',
    release_date: '1999-10-15',
    vote_count: 27000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 139,
    tagline: 'Mischief. Mayhem. Soap.',
  },
  {
    id: 15,
    title: 'The Silence of the Lambs',
    media_type: 'movie',
    poster_path: getImageByIndex(15).poster,
    backdrop_path: getImageByIndex(15).backdrop,
    overview:
      'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    belongs_to_collection: {
      id: 864,
      name: 'Hannibal Lecter Collection',
      poster_path: getImageByIndex(15).poster,
      backdrop_path: getImageByIndex(15).backdrop,
    },
    genres: [
      { id: 80, name: 'Crime' },
      { id: 53, name: 'Thriller' },
      { id: 27, name: 'Horror' },
    ],
    vote_average: 8.3,
    status: 'Released',
    release_date: '1991-02-14',
    vote_count: 15000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 118,
    tagline:
      'To enter the mind of a killer she must challenge the mind of a madman.',
  },
  {
    id: 16,
    title: 'The Social Network',
    media_type: 'movie',
    poster_path: getImageByIndex(16).poster,
    backdrop_path: getImageByIndex(16).backdrop,
    overview:
      'Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea.',
    belongs_to_collection: null,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 36, name: 'History' },
    ],
    vote_average: 7.7,
    status: 'Released',
    release_date: '2010-10-01',
    vote_count: 12000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 120,
    tagline:
      "You don't get to 500 million friends without making a few enemies.",
  },
  {
    id: 17,
    title: 'Whiplash',
    media_type: 'movie',
    poster_path: getImageByIndex(17).poster,
    backdrop_path: getImageByIndex(17).backdrop,
    overview:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    belongs_to_collection: null,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 10402, name: 'Music' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '2014-10-10',
    vote_count: 14000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 106,
    tagline: 'The road to greatness can take you to the edge.',
  },
  {
    id: 18,
    title: 'Goodfellas',
    media_type: 'movie',
    poster_path: getImageByIndex(18).poster,
    backdrop_path: getImageByIndex(18).backdrop,
    overview:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    belongs_to_collection: null,
    genres: [
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
    ],
    vote_average: 8.5,
    status: 'Released',
    release_date: '1990-09-19',
    vote_count: 11000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 146,
    tagline: 'Three decades of life in the mafia.',
  },
  {
    id: 19,
    title: 'The Departed',
    media_type: 'movie',
    poster_path: getImageByIndex(19).poster,
    backdrop_path: getImageByIndex(19).backdrop,
    overview:
      'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    belongs_to_collection: null,
    genres: [
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
      { id: 53, name: 'Thriller' },
    ],
    vote_average: 8.2,
    status: 'Released',
    release_date: '2006-10-06',
    vote_count: 13000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'HK', name: 'Hong Kong' },
    ],
    runtime: 151,
    tagline: 'Lies. Betrayal. Sacrifice. How far will you take it?',
  },
  {
    id: 20,
    title: 'Se7en',
    media_type: 'movie',
    poster_path: getImageByIndex(20).poster,
    backdrop_path: getImageByIndex(20).backdrop,
    overview:
      'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    belongs_to_collection: null,
    genres: [
      { id: 80, name: 'Crime' },
      { id: 53, name: 'Thriller' },
      { id: 9648, name: 'Mystery' },
    ],
    vote_average: 8.3,
    status: 'Released',
    release_date: '1995-09-22',
    vote_count: 16000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 127,
    tagline: 'Seven deadly sins. Seven ways to die.',
  },
  {
    id: 21,
    title: 'Dune',
    media_type: 'movie',
    poster_path: getImageByIndex(21).poster,
    backdrop_path: getImageByIndex(21).backdrop,
    overview:
      'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    belongs_to_collection: {
      id: 726871,
      name: 'Dune Collection',
      poster_path: getImageByIndex(21).poster,
      backdrop_path: getImageByIndex(21).backdrop,
    },
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' },
    ],
    vote_average: 8.1,
    status: 'Released',
    release_date: '2021-10-22',
    vote_count: 9000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'CA', name: 'Canada' },
    ],
    runtime: 155,
    tagline: 'It begins.',
  },
  {
    id: 22,
    title: 'Casablanca',
    media_type: 'movie',
    poster_path: getImageByIndex(22).poster,
    backdrop_path: getImageByIndex(22).backdrop,
    overview:
      'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
    belongs_to_collection: null,
    genres: [
      { id: 10749, name: 'Romance' },
      { id: 18, name: 'Drama' },
    ],
    vote_average: 8.2,
    status: 'Released',
    release_date: '1942-11-26',
    vote_count: 5500,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 102,
    tagline: 'They had a date with fate in Casablanca!',
  },
  {
    id: 23,
    title: 'Back to the Future',
    media_type: 'movie',
    poster_path: getImageByIndex(23).poster,
    backdrop_path: getImageByIndex(23).backdrop,
    overview:
      'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    belongs_to_collection: {
      id: 264,
      name: 'Back to the Future Collection',
      poster_path: getImageByIndex(23).poster,
      backdrop_path: getImageByIndex(23).backdrop,
    },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 35, name: 'Comedy' },
      { id: 878, name: 'Science Fiction' },
    ],
    vote_average: 8.3,
    status: 'Released',
    release_date: '1985-07-03',
    vote_count: 19000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 116,
    tagline: "He's the only kid ever to get into trouble before he was born.",
  },
  {
    id: 24,
    title: 'The Shining',
    media_type: 'movie',
    poster_path: getImageByIndex(24).poster,
    backdrop_path: getImageByIndex(24).backdrop,
    overview:
      'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    belongs_to_collection: null,
    genres: [
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' },
    ],
    vote_average: 8.2,
    status: 'Released',
    release_date: '1980-05-23',
    vote_count: 13000,
    production_countries: [
      { iso_3166_1: 'GB', name: 'United Kingdom' },
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    runtime: 146,
    tagline: 'A masterpiece of modern horror.',
  },
  {
    id: 25,
    title: 'Blade Runner 2049',
    media_type: 'movie',
    poster_path: getImageByIndex(25).poster,
    backdrop_path: getImageByIndex(25).backdrop,
    overview:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    belongs_to_collection: {
      id: 422,
      name: 'Blade Runner Collection',
      poster_path: getImageByIndex(25).poster,
      backdrop_path: getImageByIndex(25).backdrop,
    },
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 18, name: 'Drama' },
      { id: 9648, name: 'Mystery' },
    ],
    vote_average: 7.5,
    status: 'Released',
    release_date: '2017-10-06',
    vote_count: 11000,
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
      { iso_3166_1: 'GB', name: 'United Kingdom' },
      { iso_3166_1: 'ES', name: 'Spain' },
    ],
    runtime: 164,
    tagline: 'The key to the future is finally unearthed.',
  },
]

export default movies