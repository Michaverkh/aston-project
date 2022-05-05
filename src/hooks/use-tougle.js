import {useState} from 'react';

function useTougle(initialValue) {
    const [value, setValue] = useState(initialValue)

    const tougle = b => {
        setValue(!value)
    }

    return [value, tougle];
}

export {useTougle};