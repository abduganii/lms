"use client"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap() {
  const defaultState = {
    center: [41.324811, 69.288971],
    zoom: 16,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}  style={{ width: '100%', height: '460px' }}>
        <Placemark geometry={[41.324811, 69.288971]} />
      </Map>
    </YMaps>
  );
}