import Plan from './Plan';
const PlanCards = ({ plans, isMonthlyPay }) => {
    return (
        <main>
            { plans.map( plan => (
                <Plan plan={plan} key={plan.type} isMonthlyPay={isMonthlyPay} />
            ))}
        </main>
    )
}

export default PlanCards
