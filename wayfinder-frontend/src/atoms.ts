import { atom } from 'jotai';
import { schLocation } from './app/MapInput/components/locations';
const presentLocation = atom<schLocation | null>(
    null
);
const goLocation = atom<schLocation | null>(  
    null
);

export { presentLocation, goLocation}