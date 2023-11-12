import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getOpportunities } from '../redux/opportunities/opportunities';
import OppCard from '../components/OppCard';

export default function Oppotunities() {
  const oppotunities = useSelector((state) => state.oppotunities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOpportunities());
  }, [dispatch]);

  return (
    <div>
      {oppotunities.map((opp) => (
        <OppCard
          key={uuidv4()}
          id={opp._id}
          name={opp.house_name}
          pictures={opp.picture}
          description={opp.description}
        />
      ))}
    </div>
  )
}
