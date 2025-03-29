import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() =>{
    const loggedIn = await getLoggedInUser();
    return(
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                    type="greeting"
                    title = "Welcome"
                    user={loggedIn?.name || 'Guest'}
                    subtext="Access and manage your transactions efficiently."
                    />
                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={465428000.50}
                    />

                </header>
                
            </div>
            <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:6001.69},{currentBalance:99696.69}]}/>
        </section>
    )
}
export default Home;