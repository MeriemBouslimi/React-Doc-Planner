import React from 'react';

const carte=[{margin:true,imag:<img class="img-leader"  scr="https://www.docplanner.com/img/flag.png"
srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" alt='imm'></img>,title:'Leader in 10 countries',txt:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia,Argentina and Chile'},
{imag:<img class="img-leader" scr="https://www.docplanner.com/img/visits.png"
srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x" alt='imm'></img>,title:'1.5 million appointments',txt:'booked last month'},
{margin:true,imag:<img class="img-leader" scr="https://www.docplanner.com/img/patients.png"
srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x" alt='imm'></img>,title:'30 million unique patients',txt:'visit us every month'},
{imag:<img class="img-leader" scr="https://www.docplanner.com/img/doctors.png"
srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x" alt='imm'></img>,title:'2 million active doctors',txt:'trust in our solutions'}]

const Cards = () =>{
    return (
        <div className='cards'>
            {carte.map((el,i)=>
            <div className={el.margin && "cards-col"}>
                <div className="individuel-card">
            <figure className="img-leader">{el.imag}</figure>
            <h4 className="title-leader">{el.title}</h4>
            <p className="leader">{el.txt}</p>
            </div>
            </div>
            )}
        </div>
    );
}
export default Cards;
