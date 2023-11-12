import React from 'react'
import Header from '../Header/Header';
import NearbyLocations from '../NearbyLocations/NearbyLocations';
import Comments from '../Comments/Comments';
import JobOffer from '../JobOffer/JobOffer';
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <NearbyLocations />
      <Comments />
      <JobOffer />
      <Footer />
    </div>
  );
}

export default HomePage