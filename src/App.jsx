import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css'

export function App() {

    const users = [
        {
            userName:'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing:true
        },
        {
            userName:'xjf_255',
            name: 'Fernando Díaz',
            isFollowing:true
        },
        {
            userName:'Messi',
            name: 'Leo Messi',
            isFollowing:false
        },
        {
            userName:'x',
            name: 'Twitter',
            isFollowing:false
        }
    ]
    return (
        <section className="App">
            {
                users.map(user =>{
                    const { userName,name,isFollowing } = user
                    return(
                        <TwitterFollowCard
                        name={name}
                        email={userName}
                        initialValueFollowing={isFollowing}
                        key={userName}
                        />

                    )
                })
            }
            {/* <TwitterFollowCard name={'Miguel Angel Duran'} email={'midudev'} initialValueFollowing></TwitterFollowCard>
            <TwitterFollowCard name={'Cristiano Ronaldo'} email={'Cristiano'} initialValueFollowing></TwitterFollowCard>
            <TwitterFollowCard name={''} email={'twitter'}></TwitterFollowCard> */}
        </section>
    )
}