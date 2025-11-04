import { useState, useEffect } from 'react';

interface GeolocationData {
  city: string;
  region: string;
  country: string;
  isCrimea: boolean;
  personalized: boolean;
  loading: boolean;
}

export const useGeolocation = () => {
  const [data, setData] = useState<GeolocationData>({
    city: 'вашем городе',
    region: '',
    country: 'Россия',
    isCrimea: false,
    personalized: false,
    loading: true
  });

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/83e760cd-8894-490b-b675-c5f17cb70c8e');
        const result = await response.json();
        setData({
          city: result.city || 'вашем городе',
          region: result.region || '',
          country: result.country || 'Россия',
          isCrimea: result.isCrimea || false,
          personalized: result.personalized || false,
          loading: false
        });
      } catch (error) {
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchGeolocation();
  }, []);

  return data;
};
