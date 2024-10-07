import { Box, Typography } from '@mui/material';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Map() {
    const position = [21.2153712, 72.8883048];

    return (
        <>
            <Box>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Branch Locations
                </Typography>
                <MapContainer center={position} zoom={13} style={{ height: '600px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>JBS IT Institute</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </>
    );
}

export default Map;