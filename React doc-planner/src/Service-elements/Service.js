import React from 'react';

const Service = (props) => {
    return (<div className="service-elements">
        {props.listofservices.map((el, i) =>
            <div className={[el.check && 'doctors',el.check || 'patients']
            .filter(e => !!e)
            .join(' ')
          } >
                <h4>{el.title1}</h4>
                <h1>{el.title2}</h1>
                {el.country && <div classsName="select-opt"><select className="domain-switcher">{el.country.map(elem => <option>{elem}</option>)}</select> </div>}
                <figure className="services-item-screen">{el.imag} </figure>
                     </div>
       )}
        </div>
        )
        }
        export default Service;