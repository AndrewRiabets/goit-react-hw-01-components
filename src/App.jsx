import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from './components/Statistics/statistical-data.json'

import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

import TransactionHistory from './components/Transaction/TransactionHistory'
import transactions from './components/Transaction/transactions.json'

export default function App() {
    return <div> <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
    </div>
    
}



