import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "antd";

const columns = [
  {
    title: "mainteamname",
    dataIndex: "mainteamname",
    key: "mainteamname",
  },
  {
    title: "systemuserid",
    dataIndex: "systemuserid",
    key: "systemuserid",
  },
  {
    title: "organizationid",
    dataIndex: "organizationid",
    key: "organizationid",
  },
  {
    title: "businessunitid",
    dataIndex: "businessunitid",
    key: "businessunitid",
  },
  {
    title: "fullname",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

function SystemUsers() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get("http://127.0.0.1:8000/system-users/").then((res) => {
      setloading(false);
      setstate(
        res.data.map((row) => ({
          mainteamname: row.mainteamname,
          systemuserid: row.systemuserid,
          organizationid: row.organizationid,
          businessunitid: row.businessunitid,
          fullname: row.fullname,
        }))
      );
    });
  };

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 100 }}
          scroll={{ y: 540 }}
        />
      )}
    </div>
  );
}

export default SystemUsers;
