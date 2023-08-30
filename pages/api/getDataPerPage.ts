import { NextApiRequest, NextApiResponse } from "next";

import { getData } from "@/utils";
import { CURRENT_PAGE, DATA_URL, ITEMS_PER_PAGE } from "@/constants/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await getData(DATA_URL);
      const { posts } = data
      const { page = CURRENT_PAGE, itemsPerPage = ITEMS_PER_PAGE } = req.query;
  
      const startIndex = (+page - 1) * +itemsPerPage;
      const endIndex = +page * +itemsPerPage;
  
      const pageData = posts.slice(startIndex, endIndex);
       
      res.status(200).json({ pageData });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  
  
  
  
  
  
  