import countryList from 'country-list';   // we can also use: i18n-iso-countries package

const fetchGeolocation = async () => {
    try {
      // to get ip address
      const Response = await fetch("https://api.ipify.org?format=json") // sample output: {"ip":"98.207.254.136"}

      // good for displaying custom message
      if (!Response.ok) {
        throw new Error("Error fetching IP data")
      }

      const ipData = await Response.json()

      // as denoted by the sample output
      const ipVal = ipData.ip

      // call ipinfo.io API to get the geolocation
      const locResponse = await fetch(
        `https://ipinfo.io/${ipVal}?token=${process.env.PLASMO_PUBLIC_IPINFO_API_TOKEN}`
      )

      if (!locResponse.ok) {
        throw new Error("Error fetching location data")
      }

      const locData = await locResponse.json() // sample output: {"ip": "49.42.95.190", "city": "Sonīpat", "region": "Haryana", "country": "IN", "loc": "28.9948,77.0194", "org": "AS55836 Reliance Jio Infocomm Limited", "postal": "131001", "timezone": "Asia/Kolkata"}
      const { city, country } = locData
  
      const countryFullName = countryList.getName(country);

      return { city, country: countryFullName };
    } catch (error) {
      throw new Error("Error fetching geolocation: " + error.message);
    }
  };
  
  export default fetchGeolocation;
  