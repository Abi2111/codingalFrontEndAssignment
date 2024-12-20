import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const PassengersPage = () => {
  const [passengers, setPassengers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const passengersPerPage = 10;

  const fetchPassengers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${passengersPerPage}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch passengers');
      }
      const data = await response.json();
      setPassengers(prevPassengers => [...prevPassengers, ...data.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPassengers();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="passengers-container">
      <h1 className="passengers-title">Passengers</h1>
      <ul className="passengers-list">
        {passengers.map(passenger => (
          <li key={passenger._id} className="passenger-item">
            <div>
              <h3 className="passenger-name">{passenger.name.toUpperCase()}</h3>
              <p className="passenger-trips">
                Trips: <b>{passenger.trips}</b>
              </p>
            </div>
            {passenger.airline.map((airlineInfo, index) => (
              <div key={index} className="airline-info">
                <div>
                  <img
                    src={airlineInfo.logo}
                    alt={`${airlineInfo.name} Logo`}
                    className="airline-logo"
                  />
                </div>
                <div className="airline-details">
                  <h3>{airlineInfo.name}</h3>
                  <p>
                    <strong>Country:</strong> {airlineInfo.country}
                  </p>
                  <p>
                    <strong>Slogan:</strong> {airlineInfo.slogan}
                  </p>
                  <p>
                    <strong>Headquarters:</strong> {airlineInfo.head_quaters}
                  </p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <a
                      href={`https://${airlineInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {airlineInfo.website}
                    </a>
                  </p>
                  <p>
                    <strong>Established:</strong> {airlineInfo.established}
                  </p>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div className="loader-container">{loading && <Loader />}</div>
      {error && (
        <p style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default PassengersPage;
