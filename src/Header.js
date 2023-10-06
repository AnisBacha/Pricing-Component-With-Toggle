const Header = ({isMonthlyPay, setIsMonthlyPay}) => {
    return (
        <header className="header">
            <h1>Our Pricing</h1>
            <section className="header__planType">
                <p>Annually</p>
                <div className="circle-container" onClick={() => setIsMonthlyPay(!isMonthlyPay)}>
                    <div className={`circle ${
                        isMonthlyPay ? 'circle-right' : 'circle-left'
                    }`}></div>
                </div>
                <p>Monthly</p>
            </section>
        </header>
    )
}

export default Header
