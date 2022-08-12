import React, { useEffect, useState } from 'react';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import data from './data'


const App = () => {
    const [dataIndex, setDataIndex] = useState(0)
    const {image, name, career, quote} = data[dataIndex]
    
    const checkUser = (user) => {
        if(user >= data.length) {
            let newIndex = 0;
            setDataIndex(newIndex)
        } else if(user < 0) {
            let newIndex = data.length - 1
            setDataIndex(newIndex)
        }
        else {
            return
        }
    }
    const nextUser = () => {
        let newUser = dataIndex + 1
        setDataIndex(newUser)
        checkUser(newUser)
    }
    const prevUser = () => {
        let newUser= dataIndex - 1
        setDataIndex(newUser)
        checkUser(newUser)
    }
    const surpriseUser = () => {
        console.log('hello')
    }
    return (
        <main class="content has-text-centered">
            <div class="columns is-mobile">
                <div class="column is-6 is-offset-3 block">
                    <header class="block">
                        <h1 class="title is-underlined is-4">Career Reviews</h1>
                    </header>
                    <div class="box">
                        <figure class='image'>
                            <img className="img-fig" class='image is-96x96 is-inline-block is-rounded'  alt="user image" src={image}/>
                        </figure>
                        <h3 className="user-name"  class="title is-6">{name}</h3>
                        <h5 className="user-occupation" class="subtitle is-7">{career}</h5>
                        <p className="user-message" class="content has-dropdown is-small">
                            <p class='link'>quote</p>
                            <span class="dropdown-list">
                                <a class='dropdown-item'></a>
                            </span>
                        </p>
                        <div class="buttons" className="btn-container">
                            <button onClick={prevUser} class="button block">
                                <i>{<FaChevronLeft class="icon"/>}</i>
                            </button>
                            <button onClick={nextUser} class="button" >
                                <i>{<FaChevronRight class="icon"/>}</i>
                            </button>
                        </div>    
                        <button onClick={surpriseUser} className='surprise-btn' class="button is-3 is-link">Surprise Me</button>        
                    </div>                
                </div>
            </div>
            <div className="my-room">
            </div>
        </main>
    )
}
export default App;