import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fixGridSpacing: {
    margin: '0',
    width: '100%',
  },
  icon: {
    marginRight: '1rem',
    cursor: 'pointer',
  },

  section: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },

  mainSubTitle: {
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  btn: {
    marginTop: '2rem',
  },

  cards: {
    padding: '20px 0',
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    // flexGrow: '1',
  },
  footer: {
    backgroundColor: '#3f51b5',
    padding: '3rem 0',
  },
}));

export default useStyles;
