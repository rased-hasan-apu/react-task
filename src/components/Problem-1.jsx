import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState([]);
    const [name,setName]=useState('');
    const [status,setStatus]=useState('');
    const [elements, setElements] = useState([]);

    
    const handleClick = (val) =>{
        setShow(val);
    }

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const newElement = {name, status};
        setElements([...elements, newElement]);
    }


        const filteredelements = show=== "active" ? elements.filter(element=>element.status === "active"): show=== "completed" ? elements.filter(element=>element.status === "completed") : elements;
        

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleFormSubmit}>
                        <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={(val)=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredelements.map((element,index) => (
                            <tr key={index}>
                            <td>{element.name}</td>
                            <td>{element.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;