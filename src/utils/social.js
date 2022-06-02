import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const social = [
  {
    href: 'https://facebook.com/jgabrielfes/',
    icon: (props) => <FacebookIcon {...props} />,
  },
  {
    href: 'https://github.com/jgabrielfes/',
    icon: (props) => <GitHubIcon {...props} />,
  },
  {
    href: 'https://instagram.com/jgabrielfes/',
    icon: (props) => <InstagramIcon {...props} />,
  },
  {
    href: 'https://linkedin.com/in/jgabrielfes/',
    icon: (props) => <LinkedInIcon {...props} />,
  },
  {
    href: 'https://twitter.com/jgabrielfes/',
    icon: (props) => <TwitterIcon {...props} />,
  },
];

export default social;
