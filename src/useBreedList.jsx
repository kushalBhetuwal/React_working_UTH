import {useState, useEffect} from 'react';

const localcache = {};

export default function useBreedList(animal){
    const [breedlist, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(()=>{
        if(!animal){
            setBreedList([]);
        }
        else if(localcache[animal]){
            setBreedList(localcache[animal])
        }
        else{
            requestBreedList();
        }

        async function  requestBreedList(){
            setStatus('loading');
            setBreedList([]);
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            localcache[animal] = json.breeds || [];
            setBreedList(localcache[animal]);
            setStatus("loaded");

        }
    }, [animal])

    return [breedlist, status];
 
}