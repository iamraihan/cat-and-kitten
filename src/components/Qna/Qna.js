import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='qna'>
            <div className='qna-info'>
                <h3>How React works?</h3>
                <p>Ans: first of all react is javaScript library this not a framework. react main fundamental is building UI. and a developer can build ui easily. and react can build single page application so user get awesome experience. React use jsx its similar like HTML but not HTML. React has own dom it called virtual dom when change something it compare with real dom and output finally.
                    React main part is their components, state, effect hook. react sent data one components to another components using props.</p>
            </div>
            <div className="qna-info">
                <h3>Props vs state?</h3>
                <p>Ans: very basic difference is props is read only and state is changeable. props basically sent one components to another components its like javaScript parameter and argument. its behave similar like html attribute. state represent state like usestate it modify component or inside a component. Basically state working in asynchronous way. States can be used for rendering dynamic changes with the component. state is not re usable. state control react internally. props is immutable other hand state is mutable. props sent data component to  component as argument. </p>
            </div>
            <div className="qna-info">
                <h3>How useState Works?</h3>
                <p>Ans: usestate basically is a react hooks and its work with functional components. it can changes data seta data and keep data when need user data usestate provide it working as asynchronous way. usestake take a initial value where declare usestate. like empty array zero etc. usestaes take two variable one for set data another keep data for uses. </p>
            </div>
        </div>
    );
};

export default Qna;