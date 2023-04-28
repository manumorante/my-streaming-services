type Service = {
  id: number
  title: string
  icon: string
  subtitle: string
  accessory: string
  url: string
}

// Anade el tipo de variable
export const SERVICES: Service[] = [
  {
    id: 0,
    title: 'Just Watch',
    icon: 'justwatch.ico',
    subtitle: 'Where to watch movies and TV shows online',
    accessory: '',
    url: 'https://www.justwatch.com',
  },
  {
    id: 1,
    title: 'Netflix',
    icon: 'netflix.ico',
    subtitle: 'Batma',
    accessory: '',
    url: 'https://www.netflix.com',
  },
  {
    id: 2,
    title: 'Disney+',
    icon: 'disneyplus.ico',
    subtitle: 'The Mandalorian, The Simpsons, Star Wars: The Clone Wars',
    accessory: '',
    url: 'https://www.disneyplus.com/es-es/home',
  },
  {
    id: 3,
    title: 'HBO',
    icon: 'hbo.ico',
    subtitle: 'The Last Of Us, Game of Thrones, Westworld',
    accessory: '',
    url: 'https://play.hbomax.com/page/urn:hbo:page:home',
  },
  {
    id: 4,
    title: 'Prime Video',
    icon: 'primevideo.ico',
    subtitle: 'The Boys, The Expanse, The Man in the High Castle',
    accessory: '',
    url: 'https://www.primevideo.com/',
  },
  {
    id: 5,
    title: 'Apple TV+',
    icon: 'appletv.ico',
    subtitle: 'The Morning Show, See, Dickinson',
    accessory: '',
    url: 'https://tv.apple.com/es',
  },
  {
    id: 6,
    title: 'SkyShowtime',
    icon: 'skyshowtime.ico',
    subtitle: 'The Offer, Halo, Tulsa King',
    accessory: '',
    url: 'https://www.skyshowtime.com',
  },
  {
    id: 7,
    title: 'Filmin',
    icon: 'filmin.webp',
    subtitle: 'Back to the Future, The Office, The Walking Dead',
    accessory: '',
    url: 'https://www.filmin.es',
  },
]
