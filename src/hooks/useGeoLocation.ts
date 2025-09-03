import { useState, useEffect } from 'react';

interface GeoLocationData {
  country: string;
  countryCode: string;
  loading: boolean;
  error: string | null;
}

export const useGeoLocation = (): GeoLocationData => {
  const [geoData, setGeoData] = useState<GeoLocationData>({
    country: 'Australia', // Default fallback
    countryCode: 'AU',
    loading: true,
    error: null
  });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try multiple geo-location services for better reliability
        const services = [
          'https://ipapi.co/json/',
          'https://api.ipify.org?format=json', // Fallback service
        ];

        let detected = false;

        // Try the primary service first
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            if (data.country_name && data.country_code) {
              setGeoData({
                country: data.country_name,
                countryCode: data.country_code,
                loading: false,
                error: null
              });
              detected = true;
            }
          }
        } catch (error) {
          console.warn('Primary geo service failed:', error);
        }

        // If primary service failed, try alternative approach
        if (!detected) {
          try {
            // Use timezone as a fallback method
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let country = 'Australia'; // Default
            let countryCode = 'AU';

            // Map common timezones to countries
            const timezoneCountryMap: { [key: string]: { country: string; code: string } } = {
              'America/Toronto': { country: 'Canada', code: 'CA' },
              'America/Vancouver': { country: 'Canada', code: 'CA' },
              'America/Montreal': { country: 'Canada', code: 'CA' },
              'America/Halifax': { country: 'Canada', code: 'CA' },
              'America/Winnipeg': { country: 'Canada', code: 'CA' },
              'America/Edmonton': { country: 'Canada', code: 'CA' },
              'America/Regina': { country: 'Canada', code: 'CA' },
              'America/St_Johns': { country: 'Canada', code: 'CA' },
              'America/New_York': { country: 'United States', code: 'US' },
              'America/Los_Angeles': { country: 'United States', code: 'US' },
              'America/Chicago': { country: 'United States', code: 'US' },
              'America/Denver': { country: 'United States', code: 'US' },
              'Europe/London': { country: 'United Kingdom', code: 'GB' },
              'Europe/Paris': { country: 'France', code: 'FR' },
              'Europe/Berlin': { country: 'Germany', code: 'DE' },
              'Australia/Sydney': { country: 'Australia', code: 'AU' },
              'Australia/Melbourne': { country: 'Australia', code: 'AU' },
              'Australia/Perth': { country: 'Australia', code: 'AU' },
              'Australia/Brisbane': { country: 'Australia', code: 'AU' },
              'Australia/Adelaide': { country: 'Australia', code: 'AU' },
              'Australia/Darwin': { country: 'Australia', code: 'AU' },
              'Australia/Hobart': { country: 'Australia', code: 'AU' }
            };

            if (timezoneCountryMap[timezone]) {
              country = timezoneCountryMap[timezone].country;
              countryCode = timezoneCountryMap[timezone].code;
            }

            setGeoData({
              country,
              countryCode,
              loading: false,
              error: null
            });
          } catch (timezoneError) {
            console.warn('Timezone detection failed:', timezoneError);
            setGeoData(prev => ({
              ...prev,
              loading: false,
              error: 'Could not detect location'
            }));
          }
        }
      } catch (error) {
        console.error('Geo-location detection failed:', error);
        setGeoData(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to detect location'
        }));
      }
    };

    detectCountry();
  }, []);

  return geoData;
};