import { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill, } from "react-icons/ri"
import { Link, Location, useLocation } from "react-router-dom"

const AdminSidebar = () => {
    const location = useLocation();
    return (
        <aside>
            <h2>Logo.</h2>
            <DivOne location={location} />
            <DivTwo location={location} />
            <DivThree location={location} />
        </aside>
    )
}

const DivOne = ({ location }: { location: Location }) => (
    <div>
        <h5>Dashboard</h5>
        <ul>
            <Li
                url="/admin/dashboard"
                text="Dashboard"
                location={location}
                Icon={RiDashboardFill}
            />
            <Li
                url="/admin/products"
                text="Products"
                location={location}
                Icon={RiShoppingBag3Fill}
            />
            <Li
                url="/admin/customer"
                text="Customer"
                location={location}
                Icon={IoIosPeople}
            />
            <Li
                url="/admin/transactions"
                text="Transactions"
                location={location}
                Icon={AiFillFileText}
            />

        </ul>
    </div>
)
const DivTwo = ({ location }: { location: Location }) => (
    <div>
        <h5>Charts</h5>
        <ul>
            <Li
                url="/admin/chart/bar"
                text="Bar"
                location={location}
                Icon={FaChartBar}
            />
            <Li
                url="/admin/chart/pie"
                text="Pie"
                location={location}
                Icon={FaChartPie}
            />
            <Li
                url="/admin/chart/line"
                text="Line"
                location={location}
                Icon={FaChartLine}
            />

        </ul>
    </div>
)
const DivThree = ({ location }: { location: Location }) => (
    <div>
        <h5>Apps</h5>
        <ul>
            <Li
                url="/admin/app/stopwatch"
                text="Products"
                location={location}
                Icon={FaStopwatch}
            />
            <Li
                url="/admin/app/coupon"
                text="Customer"
                location={location}
                Icon={RiCoupon3Fill}
            />
            <Li
                url="/admin/app/toss"
                text="Toss"
                location={location}
                Icon={FaGamepad}
            />

        </ul>
    </div>
)

type LiProps = {
    url: string,
    text: string,
    Icon: IconType,
    location: Location
}

const Li = ({ url, text, Icon, location }: LiProps) => (
    <li
        style={{
            backgroundColor: location.pathname.includes(url) ? 'rgba(0,115,255,0.1)' : 'white'
        }}>
        <Icon />
        <Link
            style={{ color: location.pathname.includes(url) ? 'rgb(0,115,255)' : 'black' }}
            to={url}>

            {text}
        </Link>
    </li>
)


export default AdminSidebar