import About from '../pages/About';
import Contact from '../pages/Contact';
import CV from '../pages/CV';
import Works from '../pages/Works';

import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';

const routes = [
  {
    icon: <WorkIcon />,
    page: Works,
    path: '/works',
    text: 'Trabalhos',
  },
  {
    icon: <ArticleIcon />,
    page: CV,
    path: '/cv',
    text: 'Currículo',
  },
  {
    icon: <InfoIcon />,
    page: About,
    path: '/about',
    text: 'Sobre',
  },
  {
    icon: <ContactsIcon />,
    page: Contact,
    path: '/contact',
    text: 'Contato',
  },
];

export default routes;
