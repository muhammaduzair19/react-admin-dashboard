import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import UserImg from '../assets/userpic.jpg'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"

const Dashboard = () => {
  return (
    <div className="adminContainer">

      {/* Siderbar */}
      <AdminSidebar />

      {/* Main */}
      <main className="dashboard">
        <div className="search-bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={UserImg} alt="User" />
        </div>

        <section className="widget-container">


          <WidgetItem
            heading="revenue"
            color="rgb(0,115,255)"
            percent={40}
            value={34000} />


          <WidgetItem
            heading="Users"
            color="rgb(0,198,202)"
            percent={-14}
            value={400} />

          <WidgetItem
            heading="Transaction"
            color="rgb(255, 196, 0)"
            percent={80}
            value={23000} />

          <WidgetItem
            heading="Products"
            color="rgb(75, 0, 255)"
            amount={true}
            percent={30}
            value={100000} />
        </section>


      </main>


    </div>
  )
}

interface WidgetProps {
  heading: string;
  value: number;
  percent: number;
  amount?: boolean;
  color: string;
}

const WidgetItem = ({ heading, value, amount = false, percent, color }: WidgetProps) => (

  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {
        percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%
          </span>
        ) :
          (
            <span className="red">
              <HiTrendingDown /> +{percent}%
            </span>
          )
      }
    </div>
    <div className="widget-circle"
      style={{
        background: `conic-gradient(
          ${color} ${Math.abs(percent) / 100 * 360}deg,
          rgb(255,255,255) 0
        )`
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
)


export default Dashboard