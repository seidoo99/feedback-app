import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'
function FeedbackItem({item, handleDelete}) {

    // console.log(item)
//    const [rating, setRating] = useState(7)

//    const [text, setText] = useState('This is an example of a feedback item')

    return (
        <Card reverse = {true} >                                                                                                                      
            <div className="num-display">{item.rating}</div>
            <button onClick= {() => handleDelete(item.id)} className="close">
            <FaTimes color ='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
                         