import { useEffect, useState } from "react";

const MapComponent = () => {
  const defaultLocation = "三創生活園區";
  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const response = await fetch(
          `https://vercel-api-five-iota.vercel.app/api/maps?location=${encodeURIComponent(defaultLocation)}`
        );
        const data = await response.json();

        if (data.embedUrl) {
          setEmbedUrl(data.embedUrl);
        }
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    fetchMap();
  }, []); // 空依賴陣列表示這個 effect 只在組件初次掛載時執行

  return (
    <div>
      {embedUrl ? (
        <iframe
          id="map"
          src={embedUrl}

          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-100 mt-10 rounded-4 border-3 border-gray-200"
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
