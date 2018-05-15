import React from 'react'
import ReactSwipe from 'react-swipe'

class Swipe extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
            </div>
        )
    }
}


module.exports = Swipe