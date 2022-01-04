import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { Table, Button } from "antd";

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
    title: "mobilephone",
    dataIndex: "mobilephone",
    key: "mobilephone",
  },
  {
    title: "createdon",
    dataIndex: "createdon",
    key: "createdon",
  },
  {
    title: "modifiedon",
    dataIndex: "modifiedon",
    key: "modifiedon",
  },
  {
    title: "queueid",
    dataIndex: "queueid",
    key: "queueid",
  },
  {
    title: "Edit",
    dataIndex: "",
    key: "x",
    render: () => <a>Edit</a>,
  },
  {
    title: "Delete",
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
          mobilephone: row.mobilephone,
          createdon: row.createdon,
          modifiedon: row.modifiedon,
          queueid: row.queueid,
        }))
      );
    });
  };

  // const deleteSystemUser = async (id) => {
  //   await axios.delete(`http://127.0.0.1:8000/system-users/${id}`);
  //   setloading(false);
  //   const del = state.filter((su) => su.systemuserid !== state.su.id);
  //   state.splice(state.indexOf(del), 1);
  //   // setstate(del);
  //   console.log(del);
  // };

  return (
    <div>
      <Link to="add">
        <Button type="primary" style={{ marginBottom: 10 }}>
          Add Superuser
        </Button>
      </Link>
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
