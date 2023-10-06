const Plan = ({ plan, isMonthlyPay }) => {

    return (
        <section className={`${(plan.type).toLowerCase()} card`}>
            <h2>{plan.type}</h2>
            <p className="card__price">
               <span className="dollar-sign">$ </span>{
                isMonthlyPay ? plan.monthlyPrice : plan.yearlyPrice
               }
            </p>
            <hr />
            <p className="card__prop">{plan.storage} Storage</p>
            <hr />
            <p className="card__prop">{plan.users} Users Allowed</p>
            <hr />
            <p className="card__prop">Send up to {plan.sendUp}</p>
            <hr />
                
            <button>LEARN MORE</button>
        </section>
    )
}

export default Plan
