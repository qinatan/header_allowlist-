import {useState, ChangeEvent, FormEvent} from 'react'; 
import {useCreateHeaderAllowlist} from '../api/headerAllowlistAPI';

const headerRegexMap: {[key:string]: string} = {
    "Content-Type": "^Content-Type$", 
    "Authorization" : "^Authorization$", 
    "Accept": "^Accept$", 
    "User-Agent": "^User-Agent$",
    "Host": "^Host$",
    "Referer": "^Referer$",
    "Content-Length": "^Content-Length$",
    "Cookie": "^Cookie$",
    "Set-Cookie": "^Set-Cookie$",
    "Cache-Control": "^Cache-Control$",
    "Accept-Encoding": "^Accept-Encoding$",
    "Transfer-Encoding": "^Transfer-Encoding$"
}

//1. display a list of headers with checkboxes for user to select
//2. update the state when a chekcbox is clicked 
//3. submit the selected headers and their corresponding regex 

const HeaderAllowlistForm = () => {
    const [headerList, setHeaderList] = useState<string[]>([]); 
    const { createHeaderAllowlist } = useCreateHeaderAllowlist(); 
    
    //update headerList when a header checkbox is checked
    const handleHeaderChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const clickedHeader = event.target.value; 
        const isChecked = event.target.checked; 
        const updatedHeadersList = isChecked? [...headerList, clickedHeader] : headerList.filter((header) => header != clickedHeader)
        setHeaderList(updatedHeadersList)
    }
    const handleSubmit = () =>{ 
        const selectedHeaderRegex = headerList.map((header) => ({
                [header]: headerRegexMap[header]
            }))

        createHeaderAllowlist(selectedHeaderRegex) 
    }

    return(
        <form onSubmit={handleSubmit}>
            {Object.keys(headerRegexMap).map((header)=>(
                <div key={header}>
                    <input type="checkbox"
                           id = {header}
                           value = {header}
                           onChange={handleHeaderChange}/>
                    <label htmlFor={header}>{header}: {headerRegexMap[header]}</label>
                </div>
            ))}

            <button>Submit</button>
        </form>

    
    ); 
}; 

export default HeaderAllowlistForm; 



