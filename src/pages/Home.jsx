import React from 'react';
// import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';
// import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import HelpButton from '../components/HelpButton';



function Home({ onNavigate }) {
  // const [selectedPage, setSelectedPage] = useState('Home');
  const categories = [
    { label: 'Male Dogs', onClick: () => onNavigate('maleDogs'),  img: '/Images/Male dog/Max.jpg' },
    { label: 'Female Dogs', onClick: () => onNavigate('femaleDogs'), img: '/Images/Female dog/Daisy.jpg' },
    { label: 'Male Puppies', onClick: () => onNavigate('malePups'), img: 'Images/Male puppy/Finn.jpg' },
    { label: 'Female Puppies', onClick: () => onNavigate('femalePups'), img: 'Images/Female puppy/Mia.jpg' },
    { label: 'Male Cats', onClick: () => onNavigate('maleCats'),  img: 'Images/Male cat/Simba.jpg' },
    { label: 'Female Cats', onClick: () => onNavigate('femaleCats'), img: '/Images/Female Cat/Willow.jpg' },
    { label: 'Male Kittens', onClick: () => onNavigate('maleKittens'), img: 'Images/male Kitten/Binx.jpg' },
    { label: 'Female Kittens', onClick: () => onNavigate('femaleKittens'), img: 'Images/Female Kitten/Maple.jpg' }
  ];

  // if (selectedPage === 'MaleDogs') return <MaleDogs />;
  return (
    <>
     <Header onNavigate={onNavigate} />
      {/* <Header />
      <Navbar onNavigate={onNavigate} /> 
      <SearchBar />  */}
      <HelpButton/>
      <Carousel/>
      <br /><br /><br />
      <div className="myclass">
        {categories.map((animal, idx) => (
          <CategoryCard key={idx} onClick={animal.onClick} imgSrc={animal.img} label={animal.label} />
        ))}
      </div>
      <Footer onNavigate={onNavigate}/>
    </>
  );
}

export default Home;