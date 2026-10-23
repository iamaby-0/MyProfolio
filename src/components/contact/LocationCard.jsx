import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import greaterNoidaMap from '../../assets/greater-noida-map.jpg';
import { profileData } from '../../data/profile';
import './LocationCard.css';

export default function LocationCard() {
  const googleMapsUrl = "https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh";

  return (
    <div className="location-card">
      {/* Header */}
      <div className="location-card-header">
        <div className="location-icon-wrap">
          <MapPin size={20} />
        </div>
        <div className="location-header-text">
          <h2 className="location-title">My Location</h2>
          <p className="location-subtitle">{profileData.location}</p>
        </div>
      </div>

      {/* Map visual preview */}
      <div className="location-map-wrapper">
        <img
          src={greaterNoidaMap}
          alt={`Map preview of ${profileData.location}`}
          className="location-map-img"
          loading="lazy"
        />
        
        {/* Subtle overlay pill linking to external map */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-map-action-pill"
          title="Open Greater Noida on Google Maps"
          aria-label="Open Greater Noida on Google Maps in a new tab"
        >
          <span>Open in Google Maps</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}
