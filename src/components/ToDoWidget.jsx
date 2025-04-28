import React from 'react'

//CSS
import '../css/ToDoWidget.css'

//Images
import barcelona from '../images/bcnn.jpg'

function ToDoWidget() {


  return (

    <div className="widget-container">
      
      <img src={barcelona} className='widget-img' alt='' />

        <div className="things-todo">
          <div className="todo-title">Top 5 things to see in Irvine, California</div>
          <div className="todos">
          <div className="todo">• Beaches</div>
          <div className="todo">• Mountains</div>
          <div className="todo">• PAC</div>
          <div className="todo">• Los Angles</div>
          <div className="todo">• Hiking</div>
          </div>
        </div>

    </div>

  )
}

export default ToDoWidget