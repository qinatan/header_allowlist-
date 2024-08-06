import {Request, Response} from "express"
//backend logic to handle API call 
const createHeaderAllowlist = async (req: Request, res: Response) => {
    try {
            const headerAllowlist = req.body;
            const headerAllowedIn  = headerAllowlist.map((headerObj:{[x: string]: string;})=>{
                const headerName = Object.keys(headerObj)[0]; 
                const headerRegex = headerObj[headerName]; 
                return {
                    name: headerName,
                    value: headerRegex
                }; 
            }); 

            const result = {
                "header_allowed_in" : headerAllowedIn
            }
            console.log(result)
        res.status(200).json({ message: "Request processed successfully", data: headerAllowlist });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export default {
    createHeaderAllowlist
}
