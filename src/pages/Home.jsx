import MUI from 'components/MUI';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export default function Home() {
  return (
    <>
      <MUI.Typography
        variant="h2"
        sx={{ fontSize: '60px', textAlign: 'center' }}
      >
        Phonebook
      </MUI.Typography>

      <MenuBookIcon color="info" sx={{ width: '100%', height: '400px' }} />
    </>
  );
}
