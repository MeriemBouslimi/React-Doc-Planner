import React from 'react';

const sliders=[
{image:<img scr="https://www.docplanner.com/images/warsaw.png"
srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"
alt="Warsaw"></img>,title:'Warsaw'},
{image:<img scr="https://www.docplanner.com/images/barcelona.png"
srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"
class="" alt="Barcelona"></img>,title:'Barcelona'},
{image:<img scr="https://www.docplanner.com/images/istanbul.png"
srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"
class="" alt="Istanbul"></img>,title:'Istanbul'},
{image:<img scr="https://www.docplanner.com/images/rome.png"
srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"
alt="Rome"></img>,title:'Rome'},
{image:<img scr="https://www.docplanner.com/images/mexico-city.png"
srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"
alt="Mexico City"></img>,title:'Mexico City'},
{image:<img scr="https://www.docplanner.com/images/curitiba.png"
srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"
alt="Curitiba"></img>,title:'Curitiba'},
]

const Slider = () => {
    return (
        <div className="country-slider">
            {sliders.map((el,i)=>
            <div className="country-desc">
                {el.image}
                <div className="desc">
                    <span className="title">{el.title}</span>
                <button className="btn-opennings">SEE OPENINGS</button>
                </div>
                </div>
            )}
        </div>
    )
}
export default Slider;