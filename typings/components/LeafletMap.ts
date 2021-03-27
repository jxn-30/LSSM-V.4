import { Map as LMap } from 'leaflet';

export interface MapData {
    map: LMap;
}

export interface MapMethods {
    redraw(): void;
}

export interface MapComputed {
    mapId: string;
}

export interface MapProps {
    id: string;
    height: string;
    startLat: number;
    startLong: number;
    startZoom: number;
}
