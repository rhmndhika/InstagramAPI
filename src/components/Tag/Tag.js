import React, {useEffect, useState} from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';







function Tag () {
   

    const key = '618479acc2ef5ba8018516ac'

    const [tag, setTag] = useState([]);

    const options = ['animal', 'dog', 'cat', 'pet', 'mammal', 'puppy', 'human', 'beach',
    'nature', 'plant', 'mountain', 'ocean', 'outdoors', 'field', 'sunset']
  

    useEffect(() =>{
        axios.get('https://dummyapi.io/data/v1/tag', { headers: { 'app-id': key } })
        .then(res => {
            setTag(res.data.data)
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[]);
   

    return(
        <div>
             <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={options}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    }}
                />
                )}
            />
            {tag.map(tag =>(

                <p>{tag}</p>
            ))}
        </div>
    )
}


export default Tag;