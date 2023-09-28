import './App.css';
import TopInfo from './components/TopInfo';
import InfoSec from './components/InfoSec';
import catphotofunny from './images/images.png'

function App() {
  return (
    <div className="App">
      <TopInfo/>
      <InfoSec text={'SSDs have changed technology in many ways. Either that be from faster computing, to better encryption. We have been able to compress data so much that we no longer know whether or not old hard drives (HDD) could handle the amount of influx and data transfer modern computers have to deal with. \n\nWe have changed data speeds from 80-160 MB/s (HDD), to 200-550 MB/s (SSD), that is an insane difference! This now means you average load time for your computer can go anywhere from 45 seconds - 2 minutes, all the way to 5 - 15 seconds! (Personal experience) '} img="https://upload.wikimedia.org/wikipedia/commons/1/1a/2023_Dysk_SSD_Patriot_P210_2TB.jpg" title="How did the SSD change technology as we know?"/>
      <InfoSec title="Well, who invented it?" img="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F0d2479d4-35a3-11e7-99bd-13beb0903fa3?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" text={'The inventor of the SSD is a Japanese man named Fujio Masuoka from the city Takasaki, Gunma. The first flash SSD was made in 1980, and they were then commercialized in early 1987.'}/>
      <InfoSec title="What are some Pros and Cons?" img="https://t4.ftcdn.net/jpg/03/15/88/85/360_F_315888586_nTZPNh6Oe8FrJyP4oMkf28cO8YIettmW.jpg" text={'Like many things, the SSD cant be without issues, and issues it has (not many though). Yet with as many issues as it has, its Pros completely topple its Cons in how good they are, and how many there are. \n\nLets first start with the Cons. One of the biggest issues that the SSD has is its ability to overheat. Unlike its counterpart the HDD, the SSD has no moving parts. This means that in order to write and read data, millions and millions of channels of transistors have to be used to retrieve information from small data columns thinner than a peice of paper. \n\nNow the Pros, yes there is only 1 real Con. There are many Pros, so here is the simplified list. SSDs transfer data 14 times faster than HDDs. SSDs are more compact, and there are no moving parts. This means that it makes your computer quieter overall, smaller, and more efficient.'}/>
      <InfoSec title="How much does it cost?" img="https://cdn.thomasnet.com/insights-images/embedded-images/44398f64-4d8a-4c61-9d53-d68d34cc7ca3/df56ea58-327a-42d0-a158-08857682f633/FullHD/analytical-approach-to-price-and-cost.jpg" text={'High end SSDs can go anywhere from $80-$150 USD'}/>
      <InfoSec title="Will they continue to be a game changer?" img="https://greenbookblog.org/wp-content/uploads/2014/10/make_a_difference.jpg" text={'They will absolutely continue to be a game changer to the tech industry! Back then SSDs were only capabible of binary storage, so you had to stack 32 latches in order to get 1 byte of 32 bit storage. Modern SSDs use Hexedecimal now in order to store information, instead of 0/1s, its 0-9 then A-F. \n\n Scientists have been attempting (and recently succeeding in making 32 interval latches. So only 1 latch can store 32 different numbers.'}/>
      <InfoSec title="How did it impact us?" img="https://img.freepik.com/free-vector/society-isometric-concept-with-tiny-characters-living-routine-people-using-gadgets-engage-sports-activity-communicate-internet-networks-studying-working-3d-line-art-illustration_107791-3588.jpg?w=2000" text="It has impacted society in many ways. From faster computing and loading times. To cloud computing and storage."/>
      <InfoSec title="How many have been sold?" img="https://blog.uwcped.org/wp-content/uploads/2021/07/profit-blog.jpg" text="From 2021-2022, over 752 Million SSDs have been sold! This equates to just over $63 Billion!"/>
      <InfoSec title="Where can I get one?" img="" text={'You can get yourself an SSD from places such as MicroCenter, Amazon, and any assortment of tech shop around you (prices vary)'}/>
    </div>
  );
}

export default App;
