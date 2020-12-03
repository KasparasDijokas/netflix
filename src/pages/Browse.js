import React from 'react';
import { BrowseContainer } from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
    const {series} = useContent('series');
    const {films} = useContent('films');
    
    const slides = selectionFilter({series, films});
    console.log(slides);
    return (
        <BrowseContainer slides={slides}/>
    )
}

export default Browse
