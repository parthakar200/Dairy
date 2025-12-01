import '../noteCard/noteCard.css';

export function Card(props) {
  return (
    <div className="">

      <div className="rounded  paper pt-4 px-4 text-dark" style={{height:"280px", width:"200px"}}>

      {/* <div className="rounded paper pt-4 px-4 text-dark" style={{height:"65%", width:"45%"}}> */}

        <h4 className='pt-2 m-0'>{props.heading}</h4>
        <hr />
        <p>{props.content}</p>
      </div>
    </div>
  );
}
