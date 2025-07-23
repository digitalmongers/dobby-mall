import StudentDashboard from '@/components/Student/StudentDashboard';
import Studentshop from '@/components/Student/Studentshop';
import StudentEarnings from '@/components/Student/StudentEarnings'

const StudentPage: React.FC = () => {
return (
    <div>
     
      <div><StudentDashboard/></div>
      <div><Studentshop/></div>
      <div><StudentEarnings/></div>
    
      
    
    </div>
  );
};

export default StudentPage;