
import React from 'react'

const QuoteApi = () => {
    const [content, setContent] = useState([]);
    let tempContent = [];

    const [loading, setLoading] = useState(false)

    const setMyClick = (e) => {
        setUserClick(e.target.value)
    }

    const randomQuotes = async () => {
        setLoading(true)
        let url = `https://api.quotable.io/random`;

        const res = await axios.get(url);
        let myresponse = res.data;

        tempContent = [];
        for (const object of myresponse) {
            for (const obj of object.content) {

                let mycontent = con.content
                tempContent.push(mycontent)


            }
        }
        setContent([...tempContent])
        setLoading(false)
    }



    return (
        <div>
            <h1 className='heading'>Quotable API</h1>

            <div className="input">

                <h2 className='quotes' onChange={setMyClick}>"It's important to know that words don't move mountains. Work, exacting work moves mountains."</h2>
                {/* <h3 className='author'>Author- Danilo Dolci</h3> */}
                <button className='search-btn' onClick={randomQuotes}>click</button>
            </div>

            <div className="response-container">
                <hr className='h-line' />
                <h1>
                    {
                        (loading) ? 'Loading....' : ''
                    }
                </h1>

                {/* <ul>
{
content.map((m, index) => (<Meaning key={index} meaning={m} />))
}
</ul> */}
            </div>
        </div>
    )
}

export default QuoteApi



























// import React from 'react'

// const quotesapi = () => {
//     // const [userClick, setUserClick] = useState('');

//     const [content, setContent] = useState([]);
//     let tempContent = [];

//     const [loading, setLoading] = useState(false)

//     const setMyClick = (e) => {
//         setUserClick(e.target.value)
//     }

//     const randomQuotes = async () => {
//         setLoading(true)
//         let url = `https://api.quotable.io/random`;

//         const res = await axios.get(url);
//         let myresponse = res.data;

//         tempContent = [];
//         for (const object of myresponse) {
//             for (const obj of object.content) {

//                 let mycontent = con.content
//                 tempContent.push(mycontent)


//             }
//         }
//         setContent([...tempContent])
//         setLoading(false)
//     }


//     return (
//         <div>
//             <h1 className='heading'>Quotable API</h1>

//             <div className="input">

//                 <h2 className='quotes' onChange={setMyClick}>"It's important to know that words don't move mountains. Work, exacting work moves mountains."</h2>
//                 {/* <h3 className='author'>Author- Danilo Dolci</h3> */}
//                 <button className='search-btn' onClick={randomQuotes}>click</button>
//             </div>

//             <div className="response-container">
//                 <hr className='h-line' />
//                 <h1>
//                     {
//                         (loading) ? 'Loading....' : ''
//                     }
//                 </h1>

//                 {/* <ul>
//         {
//             content.map((m, index) => (<Meaning key={index} meaning={m} />))
//         }
//     </ul> */}
//             </div>
//         </div>
//     )
// }

// export default quotesapi
