import React from "react";
import Link from "next/link";

const Details = () => {
  return (
    <div className="sidefilter-section">
      <div className="side-filters">
        <ul className="filters-list">
          <li>
            <Link href="/pages/Details/Mydesigns">
              <span>My Designs</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/Details/Orderhistory">
              <span>Order History</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/Details/Grouporders">
              <span>Group Orders</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/Details/Fundraising">
              <span>Fundraising</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/Details/Accountsettings">
              <span>Account Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/pages/Details/Inventory">
              <span>Inventory</span>
            </Link>
          </li>
          {/* <li>
            <Link href="/group-ordering">
              <span>Group Ordering</span>
            </Link>
          </li> */}
          <li>
            <Link href="/pages/Details/Onlinestores">
              <span>Online Stores</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
