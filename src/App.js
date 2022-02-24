import {useState} from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/FeedbackData'
import Card from './components/shared/Card'
import FeedbackStats from './components/FeedbackStats'
function App(){

    const [feedback, setfeedback] = useState(
        FeedbackData 

    )

    const deleteFeedback = (id)=> {
        if(window.confirm('are you sure you want to delete ?')){
            setfeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (

       <>
       <Header />
        <div className='container'>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}
            />
            <Card>Hello world</Card>
        </div>
        </>
    )                                                                                 
}  


export default App