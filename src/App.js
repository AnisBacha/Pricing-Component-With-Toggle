import { useState } from 'react'; 
import Header from './Header';
import PlanCards from './PlanCards';

function App() {
  const [isMonthlyPay, setIsMonthlyPay] = useState(true);
  const [plans] = useState([
    {
      type: 'Basic',
      monthlyPrice: '19.99' ,
      yearlyPrice: '199.99',
      storage: '500 GB',
      users: 2,
      sendUp: '3 GB'
    },
    {
      type: 'Professional',
      monthlyPrice: 24.99,
      yearlyPrice: 249.99,
      storage: '1 TB',
      users: 5,
      sendUp: '10 GB'
    },
    {
      type: 'Master',
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      storage: '2 TB',
      users: 10,
      sendUp: '20 GB'
    }
  ])

  return (
    <div className="App">
      <Header isMonthlyPay={isMonthlyPay} setIsMonthlyPay={setIsMonthlyPay}/>
      <PlanCards plans={plans} isMonthlyPay={isMonthlyPay}/>

    </div>
  );
}

export default App;
