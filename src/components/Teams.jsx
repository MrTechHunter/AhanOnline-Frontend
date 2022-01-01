import React, { useEffect, useState } from "react";

import axios from "axios";

import { Table } from "antd";

const columns = [
  {
    title: "teamid",
    dataIndex: "teamid",
    key: "teamid",
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
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
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
    title: "createdby",
    dataIndex: "createdby",
    key: "createdby",
  },
  {
    title: "modifiedby",
    dataIndex: "modifiedby",
    key: "modifiedby",
  },
  {
    title: "isdefault",
    dataIndex: "isdefault",
    key: "isdefault",
  },
  {
    title: "administratorid",
    dataIndex: "administratorid",
    key: "administratorid",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

function Teams() {
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
          teamid: row.teamid,
          organizationid: row.organizationid,
          businessunitid: row.businessunitid,
          name: row.name,
          description: row.description,
          createdon: row.createdon,
          modifiedon: row.modifiedon,
          createdby: row.createdby,
          modifiedby: row.modifiedby,
          isdefault: row.isdefault,
          administratorid: row.administratorid,
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

export default Teams;
