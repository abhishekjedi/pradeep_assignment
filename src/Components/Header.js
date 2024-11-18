import { useState } from "react";
import "./header.css";
const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  return (
   <div className="header" onClick={() => setIsFilterShown(!isFilterShown)}>
    <div className="display_text"><p>Display</p> ▽</div>
    {isFilterShown && (
       <div className="header_filter_container">
       <div className="grouping">
         <label htmlFor="grouping">Grouping</label>
         <select name="grouping" value={grouping} onChange={(e) => setGrouping(e.target.value)}>
           <option value="Status">Status</option>
           <option value="User">User</option>
           <option value="Priority">Priority</option>
         </select>
       </div>
       <div className="sorting">
         <label>Ordering</label>
         <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
           <option value="Priority">Priority</option>
           <option value="Title">Title</option>
         </select>
       </div>
     </div>
    )}
   </div>
  );
};

export default Header;
