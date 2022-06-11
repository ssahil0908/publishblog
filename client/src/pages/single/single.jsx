import "./single.css"
import Sidebar from '../../components/sidebar/sidebar'
import Singlepost from '../../components/singlepost/singlepost'
export default function single() {
  return (
   <div className="single">
      
      <Singlepost/>
       <Sidebar/>
       
   </div>
  );
}
